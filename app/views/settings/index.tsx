import {
    Text,
  View,
} from "react-native";
import SigninButton from "../../components/govuk/signin_button";
import React, {useContext} from "react";
import {PushNotificationTokenContext} from "../../../App";

const SettingsPage = () => {
    const token = React.useContext(PushNotificationTokenContext);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>otherpage.</Text>
            <Text>{token}</Text>
            {/*<Text>{pushNotificationContext?.pushNotificationToken}</Text>*/}
        </View>
    )
} 

export default SettingsPage
