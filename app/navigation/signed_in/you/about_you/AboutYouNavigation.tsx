import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type ReactElement } from "react";
import { AboutYouStackType } from "../../../types";
import AboutYou from "../../../../views/signed_in_stack/you_stack/about_you";
import UpdateName from "../../../../views/signed_in_stack/you_stack/about_you/update_name";

function AboutYouSection(): ReactElement {
  const AboutYouStack = createNativeStackNavigator<AboutYouStackType>();

  return (
    <AboutYouStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AboutYouStack.Screen
        name="About You Page"
        component={AboutYou}
      />
      <AboutYouStack.Screen
        name="Update Name"
        component={UpdateName}
      />
    </AboutYouStack.Navigator>
  );
}

export default AboutYouSection;
