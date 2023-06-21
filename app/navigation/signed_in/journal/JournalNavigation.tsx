import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JournalPage from "../../../views/signed_in_stack/journal_stack/jounal";
import { type JournalStackType } from "../../types";
import { type ReactElement } from "react";

function JournalSection(): ReactElement {
  const JournalStack = createNativeStackNavigator<JournalStackType>();

  return (
    <JournalStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <JournalStack.Screen name="Journal Page" component={JournalPage} />
    </JournalStack.Navigator>
  );
}

export default JournalSection;
