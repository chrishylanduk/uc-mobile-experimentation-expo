import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "../../../views/signed_in_stack/home_stack/home";
import {HomeStackType} from "../../types";

function HomeSection() {
    const HomeStack = createNativeStackNavigator<HomeStackType>();

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen name="Home" component={HomePage}/>
        </HomeStack.Navigator>
    );
}

export default HomeSection
