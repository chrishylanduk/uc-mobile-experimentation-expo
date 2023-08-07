import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OffersPage from "../../../views/signed_in_stack/offers_stack/offers";
import { type OffersStackType } from "../../types";
import { type ReactElement } from "react";

function OffersSection(): ReactElement {
  const OffersStack = createNativeStackNavigator<OffersStackType>();

  return (
    <OffersStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OffersStack.Screen name="Offers Page" component={OffersPage} />
    </OffersStack.Navigator>
  );
}

export default OffersSection;
