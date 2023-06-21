import * as React from "react";
import { useEffect } from "react";
import {
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignedOutSection from "./app/navigation/signed_out/SignedOutNavigation";
import SignedInSection from "./app/navigation/signed_in/SignedInNavigation";
import { navigationRef } from "./app/navigation/RootNavigation";
import { RootNavigationType } from "./app/navigation/types";
import { PageContext, UserIdContext } from "./app/views/Context";
import { PageType } from "./app/views/types/ContextTypes";
import SignInLoadingSection from "./app/views/signed_in_stack";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";

function App() {
  const [userId, setUserId] = React.useState<String>("");
  const userIdValue = { userId, setUserId };
  const [page, setPage] = React.useState<PageType>({
    page: "Home",
    subpage: "Home Page",
    override: false,
  });
  const pageValue = { page, setPage };

  useEffect(() => {
    OneSignal.setAppId(Constants.manifest?.extra?.oneSignalAppId);
    OneSignal.promptForPushNotificationsWithUserResponse();
    OneSignal.setNotificationOpenedHandler(notification => {
      setPage({ page: "Todo", subpage: "Appointments", override: true });
    });
  }, []);

  const TopLevel = createNativeStackNavigator<RootNavigationType>();

  return (
    <UserIdContext.Provider value={userIdValue}>
        <PageContext.Provider value={pageValue}>
          <NavigationContainer ref={navigationRef}>
            <TopLevel.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              {userId === "" ? (
                <>
                  <TopLevel.Screen
                    name="SignedOut"
                    component={SignedOutSection}
                  />
                </>
              ) : (
                <>
                  <TopLevel.Screen
                    name="SignInLoading"
                    component={SignInLoadingSection}
                  />
                  <TopLevel.Screen name="SignIn" component={SignedInSection} />
                </>
              )}
            </TopLevel.Navigator>
          </NavigationContainer>
        </PageContext.Provider>
    </UserIdContext.Provider>
  );
}

export default App;
