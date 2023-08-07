import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesPage from "../../../views/signed_in_stack/messages_stack/messages";
import { type MessagesStackType } from "../../types";
import { type ReactElement } from "react";

function MessagesSection(): ReactElement {
  const MessagesStack = createNativeStackNavigator<MessagesStackType>();

  return (
    <MessagesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MessagesStack.Screen name="Messages Page" component={MessagesPage} />
    </MessagesStack.Navigator>
  );
}

export default MessagesSection;
