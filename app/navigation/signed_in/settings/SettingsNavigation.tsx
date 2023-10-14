import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "../../../views/signed_in_stack/settings_stack/settings";
import { type SettingsStackType } from "../../types";
import { type ReactElement } from "react";
import HomeSettingsPage from "../../../views/signed_in_stack/settings_stack/customise_home_page";
import BiometricsSettingsPage from "../../../views/signed_in_stack/settings_stack/biometrics";

function SettingsSection(): ReactElement {
  const SettingsStack = createNativeStackNavigator<SettingsStackType>();

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="Settings Page" component={SettingsPage} />
      <SettingsStack.Screen
        name="Home Settings Page"
        component={HomeSettingsPage}
      />
      <SettingsStack.Screen
        name="Biometrics Settings Page"
        component={BiometricsSettingsPage}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsSection;
