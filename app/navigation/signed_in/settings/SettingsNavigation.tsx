import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SettingsPage from "../../../views/signed_in_stack/settings_stack/settings";
import {SettingsStackType} from "../../types";

function SettingsSection() {
    const SettingsStack = createNativeStackNavigator<SettingsStackType>();

    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SettingsStack.Screen name="Settings Page" component={SettingsPage}/>
        </SettingsStack.Navigator>
    );
}

export default SettingsSection
