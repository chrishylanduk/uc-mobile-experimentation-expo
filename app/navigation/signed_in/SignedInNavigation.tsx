import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoSection from "./todo/TodoNavigation";
import SettingsSection from "./settings/SettingsNavigation";
import HomeSection from "./home/HomeNavigation";
import JournalSection from "./journal/JournalNavigation";
import LogoTitle from "../../components/logo_title";
import { SignedInStackType } from "../types";

function SignedInSection() {
  const SignedInStack = createBottomTabNavigator<SignedInStackType>();

  return (
    <SignedInStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
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
          backgroundColor: "#ffffff",
          borderStyle: "solid",
          borderBottomWidth: 2,
          borderBottomColor: "#1d70b8",
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#1d70b8",
        tabBarInactiveTintColor: "gray",
        // @ts-ignore
        headerTitle: (props) => <LogoTitle {...props} />,
      })}
    >
      <SignedInStack.Screen name="Home" component={HomeSection} />
      <SignedInStack.Screen name="Todo" component={TodoSection} />
      <SignedInStack.Screen name="Journals" component={JournalSection} />
      <SignedInStack.Screen name="Settings" component={SettingsSection} />
    </SignedInStack.Navigator>
  );
}

export default SignedInSection;
