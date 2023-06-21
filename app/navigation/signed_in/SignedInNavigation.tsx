import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoSection from "./todo/TodoNavigation";
import SettingsSection from "./settings/SettingsNavigation";
import HomeSection from "./home/HomeNavigation";
import JournalSection from "./journal/JournalNavigation";
import LogoTitle from "../../components/logo_title";
import { type SignedInStackType } from "../types";
import { type ReactElement } from "react";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function SignedInSection(): ReactElement {
  const SignedInStack = createBottomTabNavigator<SignedInStackType>();

  return (
    <SignedInStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        tabBarIcon: ({ color, size }) => {
          let icon: IconProp;

          switch (route.name) {
            case "Home": {
              icon = "home";
              break;
            }
            case "Todo": {
              icon = "clipboard";
              break;
            }
            case "Journals": {
              icon = "book";
              break;
            }
            default: {
              icon = "cog";
              break;
            }
          }
          return <FontAwesomeIcon icon={icon} size={size} color={color} />;
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
        // @ts-expect-error Temporary
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
