import * as React from "react";
import {Dispatch, SetStateAction, useEffect} from "react";
import {NavigationContainer, NavigatorScreenParams} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import {Subscription} from 'expo-modules-core';
import {Platform,} from "react-native";
import SignedOutSection from "./app/navigation/signed_out/SignedOutNavigation";
import SignedInSection from "./app/navigation/signed_in/SignedInNavigation";
import {navigate, navigationRef} from "./app/navigation/RootNavigation";
import {RootNavigationType} from "./app/navigation/types";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
        }
        try {
            token = (await Notifications.getExpoPushTokenAsync()).data;
        } catch (error) {
            alert(error)
        }
        console.log(token);
    } else {
        alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }

    return token;
}

export type UserIdContextType = {
    userId: String,
    setUserId: Dispatch<SetStateAction<String>>
}


export const PushNotificationTokenContext = React.createContext<String>("default");
export const UserIdContext = React.createContext<UserIdContextType>({
    userId: "",
    setUserId: () => {}
});

function App() {
    const [expoPushToken, setExpoPushToken] = React.useState<String>("");
    const [notification, setNotification] = React.useState<Notifications.Notification | boolean>(false);
    const [userId, setUserId] = React.useState<String>("");
    const userIdValue = {userId, setUserId};

    const notificationListener = React.useRef<Subscription>();
    const responseListener = React.useRef<Subscription>();

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) => {
                if (token) {
                    setExpoPushToken(token)
                }
            }

        );

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                if (notification) {
                    setNotification(notification);
                }
            });

        type NotificationBody = {
            topLevel: NavigatorScreenParams<any>,
            params?: NotificationBody
        }
        responseListener.current  =
            Notifications.addNotificationResponseReceivedListener((response) => {
                console.log(response);
                navigate('SignIn', {
                        screen: 'Todo', params: {
                            screen: 'Appointments'
                        }
                    })
            });

        return () => {
            if (notificationListener.current) {
                Notifications.removeNotificationSubscription(
                    notificationListener.current
                );
            }
            if (responseListener.current) {
                Notifications.removeNotificationSubscription(responseListener.current);
            }
        };
    }, []);

    const TopLevel = createNativeStackNavigator<RootNavigationType>();

    return (
      <UserIdContext.Provider value={userIdValue}>
      <PushNotificationTokenContext.Provider value={expoPushToken}>
    <NavigationContainer ref={navigationRef}>
      <TopLevel.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
          {
              userId === "" ?
                  <TopLevel.Screen name="SignedOut" component={SignedOutSection} />
                  :
                  <TopLevel.Screen name="SignIn" component={SignedInSection} />
          }
      </TopLevel.Navigator>
    </NavigationContainer>
    </PushNotificationTokenContext.Provider>
      </UserIdContext.Provider>
    );
}

export default App;
