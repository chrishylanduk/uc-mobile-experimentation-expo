import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YouPage from "../../../views/signed_in_stack/you_stack/you";
import { type YouStackType } from "../../types";
import { type ReactElement } from "react";

function YouSection(): ReactElement {
  const YouStack = createNativeStackNavigator<YouStackType>();

  return (
    <YouStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <YouStack.Screen name="You Page" component={YouPage} />
    </YouStack.Navigator>
  );
}

export default YouSection;
