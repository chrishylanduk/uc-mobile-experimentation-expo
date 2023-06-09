import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import JournalPage from "../../../views/signed_in_stack/journal_stack/jounal";
import {JournalStackType} from "../../types";

function JournalSection() {
    const JournalStack = createNativeStackNavigator<JournalStackType>();

    return (
        <JournalStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <JournalStack.Screen name="Journal" component={JournalPage}/>
        </JournalStack.Navigator>
    );
}

export default JournalSection
