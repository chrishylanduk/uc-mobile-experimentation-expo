import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoSection from "./todo/TodoNavigation";
import HomeSection from "./home/HomeNavigation";
import MessagesSection from "./messages/MessagesNavigation";
import LogoTitle from "../../components/logo_title";
import { type SignedInStackType } from "../types";
import { type ReactElement } from "react";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import OffersSection from "./offers/OffersNavigation";
import YouSection from "./you/YouNavigation";
import { Pressable } from "react-native";
import { navigate } from "../RootNavigation";
import SettingsSection from "./settings/SettingsNavigation";

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
            case "To-dos": {
              icon = "clipboard";
              break;
            }
            case "Journal": {
              icon = "comment";
              break;
            }
            case "Offers": {
              icon = "shopping-basket";
              break;
            }
            case "You": {
              icon = "user";
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
        headerRight: () => (
          <Pressable
            style={{ paddingRight: 12 }}
            onPress={() => {
              navigate("SignIn", {
                screen: "Settings",
              });
            }}
          >
            <FontAwesomeIcon
              icon={"cog"}
              size={25}
              color={route.name === "Settings" ? "#1d70b8" : "gray"}
            />
          </Pressable>
        ),
      })}
    >
      <SignedInStack.Screen name="Home" component={HomeSection} />
      <SignedInStack.Screen name="Journal" component={MessagesSection} />
      <SignedInStack.Screen name="To-dos" component={TodoSection} />
      <SignedInStack.Screen name="Offers" component={OffersSection} />
      <SignedInStack.Screen name="You" component={YouSection} />
      <SignedInStack.Screen
        name="Settings"
        component={SettingsSection}
        options={{
          tabBarButton: () => null,
        }}
      />
    </SignedInStack.Navigator>
  );
}

export default SignedInSection;
