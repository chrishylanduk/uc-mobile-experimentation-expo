import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "./app/views/login";
import ClaimantHomePage from "./app/views/claimant_home";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SettingsPage from "./app/views/settings";
import TodoPage from "./app/views/todos";
import JournalPage from "./app/views/jounals";
import {Dispatch, SetStateAction, useEffect} from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Subscription } from 'expo-modules-core';
import {
    Platform,
} from "react-native";

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

export type RootStackParamList = {
  SignedOut: undefined;
  SignIn: undefined;
};

export type SignedInParamList = {
    Home: undefined;
    Todo: undefined;
    Journals: undefined;
    Settings: undefined;
    Appointments: undefined;
};

export type UserIdContextType = {
    userId: String,
    setUserId: Dispatch<SetStateAction<String>>
}

const SignedInStack = createBottomTabNavigator<SignedInParamList>();
const TopLevel = createNativeStackNavigator<RootStackParamList>();

function SignedInSection() {
  return (
    <SignedInStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof FontAwesome.glyphMap;

          switch (route.name) {
            case "Home": {
              iconName = "home";
              break;
            }
            case "Todo": {
              iconName = "clipboard";
              break;
            }
            case "Journals": {
              iconName = "book";
              break;
            }
            default: {
              iconName = "cog";
              break;
            }
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <SignedInStack.Screen name="Home" component={ClaimantHomePage} />
      <SignedInStack.Screen name="Todo" component={TodoPage} />
      <SignedInStack.Screen name="Journals" component={JournalPage} />
      <SignedInStack.Screen name="Settings" component={SettingsPage} />
    </SignedInStack.Navigator>
  );
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

        responseListener.current  =
            Notifications.addNotificationResponseReceivedListener((response) => {
                console.log(response);
                //Todo: (This triggers when notification clicked) - go to appointment screen
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
  return (
      <UserIdContext.Provider value={userIdValue}>
      <PushNotificationTokenContext.Provider value={expoPushToken}>
    <NavigationContainer>
      <TopLevel.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
          {
              userId === "" ?
                  <TopLevel.Screen name="SignedOut" component={LoginPage} />
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
