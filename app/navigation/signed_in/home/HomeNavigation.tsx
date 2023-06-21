import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../../views/signed_in_stack/home_stack/home";
import { type HomeStackType } from "../../types";
import { type ReactElement } from "react";

function HomeSection(): ReactElement {
  const HomeStack = createNativeStackNavigator<HomeStackType>();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home Page" component={HomePage} />
    </HomeStack.Navigator>
  );
}

export default HomeSection;
