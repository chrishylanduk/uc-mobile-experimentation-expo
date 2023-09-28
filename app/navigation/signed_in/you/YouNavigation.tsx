import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YouPage from "../../../views/signed_in_stack/you_stack";
import { type YouStackType } from "../../types";
import { type ReactElement } from "react";
import AppointmentsSection from "./appointments/AppointmentsNavigation";
import AboutYou from "../../../views/signed_in_stack/you_stack/about_you";
import AboutYouSection from "./about_you/AboutYouNavigation";

function YouSection(): ReactElement {
  const YouStack = createNativeStackNavigator<YouStackType>();

  return (
    <YouStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <YouStack.Screen name="You Page" component={YouPage} />
      <YouStack.Screen name="Appointments" component={AppointmentsSection} />
      <YouStack.Screen name="About You" component={AboutYouSection} />
    </YouStack.Navigator>
  );
}

export default YouSection;
