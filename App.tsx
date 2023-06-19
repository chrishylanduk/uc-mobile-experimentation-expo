import * as React from "react";
import { useEffect } from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Subscription } from "expo-modules-core";
import { Platform } from "react-native";
import SignedOutSection from "./app/navigation/signed_out/SignedOutNavigation";
import SignedInSection from "./app/navigation/signed_in/SignedInNavigation";
import { navigationRef } from "./app/navigation/RootNavigation";
import { RootNavigationType } from "./app/navigation/types";
import { PageContext, UserIdContext } from "./app/views/Context";
import { PageType } from "./app/views/types/ContextTypes";
import SignInLoadingSection from "./app/views/signed_in_stack";
import { PushNotificationTokenContext } from "./app/views/Context";

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
      alert(error);
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

function App() {
  const [expoPushToken, setExpoPushToken] = React.useState<String>("");
  const [notification, setNotification] = React.useState<
    Notifications.Notification | boolean
  >(false);
  const [userId, setUserId] = React.useState<String>("");
  const userIdValue = { userId, setUserId };
  const [page, setPage] = React.useState<PageType>({
    page: "Home",
    subpage: "Home Page",
    override: false,
  });
  const pageValue = { page, setPage };

  const notificationListener = React.useRef<Subscription>();
  const responseListener = React.useRef<Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        setExpoPushToken(token);
      }
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        if (notification) {
          setNotification(notification);
        }
      });

    type NotificationBody = {
      topLevel: NavigatorScreenParams<any>;
      params?: NotificationBody;
    };
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
        setPage({ page: "Todo", subpage: "Appointments", override: true });
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
        <PageContext.Provider value={pageValue}>
          <NavigationContainer ref={navigationRef}>
            <TopLevel.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              {userId === "" ? (
                <>
                  <TopLevel.Screen
                    name="SignedOut"
                    component={SignedOutSection}
                  />
                </>
              ) : (
                <>
                  <TopLevel.Screen
                    name="SignInLoading"
                    component={SignInLoadingSection}
                  />
                  <TopLevel.Screen name="SignIn" component={SignedInSection} />
                </>
              )}
            </TopLevel.Navigator>
          </NavigationContainer>
        </PageContext.Provider>
      </PushNotificationTokenContext.Provider>
    </UserIdContext.Provider>
  );
}

export default App;
