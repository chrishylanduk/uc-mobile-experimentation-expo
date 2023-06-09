import {CommonActions, createNavigationContainerRef} from '@react-navigation/native';
import * as React from "react";
import {RootNavigationType} from "./types";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {useContext} from "react";
// import {UserIdContext} from "../../App";
// import SignedInSection from "./signed_in_stack/SignedInNavigation";
// import SignedOutSection from "./signed_out_stack/SignedOutNavigation";

export const navigationRef = createNavigationContainerRef()

export function navigate(name: keyof RootNavigationType, params?: object) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate(name, params));
    }
}
//
// export function RootNavigation(){
//     const TopLevel = createNativeStackNavigator<RootStackParamList>();
//     const {userId } = useContext(UserIdContext);
//
//     return(
//             <TopLevel.Navigator
//                 screenOptions={{
//                     headerShown: false,
//                 }}
//             >
//                 {
//                     userId === "" ?
//                         <TopLevel.Screen name="SignedOut" component={SignedOutSection} />
//                         :
//                         <TopLevel.Screen name="SignIn" component={SignedInSection} />
//                 }
//             </TopLevel.Navigator>
//     );
// }
