import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Platform,
} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import * as LocalAuthentication from "expo-local-authentication";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

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
    token = (await Notifications.getExpoPushTokenAsync()).data;
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

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Your expo push token: {expoPushToken}</Text>

      <Text>Title: {notification && notification.request.content.title} </Text>
      <Text>Body: {notification && notification.request.content.body}</Text>
      <Text>
        Data:{" "}
        {notification && JSON.stringify(notification.request.content.data)}
      </Text> */}
      <Pressable style={styles.govukButton}>
        <Text
          style={styles.govukButtonText}
          onPress={async () => {
            await LocalAuthentication.authenticateAsync({
              promptMessage: "Log in with fingerprint, face or iris",
            });
          }}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  govukButton: {
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 22,
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 7,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0)",
    borderStyle: "solid",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#00703c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowColor: "#002d18",
    shadowOpacity: 1,
    verticalAlign: "top",
  },
  govukButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
  },
});
