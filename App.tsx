import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "./app/views/login";
import ClaimantHomePage from "./app/views/claimant_home";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import OtherPage from "./app/views/jounals";
import TodoPage from "./app/views/todos";
import JournalPage from "./app/views/jounals";
import {useEffect} from "react";
import * as Notifications from "expo-notifications";
import * as LocalAuthentication from "expo-local-authentication";
import * as Device from "expo-device";
import { EventEmitter, Subscription, UnavailabilityError } from 'expo-modules-core';
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

export type RootStackParamList = {
  SignedOut: undefined;
  SignIn: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function SignedInStack() {
  return (
    <Tab.Navigator
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
              iconName = "ellipsis-h";
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
      <Tab.Screen name="Home" component={ClaimantHomePage} />
      <Tab.Screen name="Todo" component={TodoPage} />
      <Tab.Screen name="Journals" component={JournalPage} />
      <Tab.Screen name="More" component={OtherPage} />
    </Tab.Navigator>
  );
}

function App() {
    const [expoPushToken, setExpoPushToken] = React.useState<String>("");
    const [notification, setNotification] = React.useState<Notifications.Notification | boolean>(false);
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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignedOut" component={LoginPage} />
        <Stack.Screen name="SignIn" component={SignedInStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
