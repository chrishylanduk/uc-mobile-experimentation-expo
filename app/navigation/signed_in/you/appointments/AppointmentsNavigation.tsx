import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type ReactElement } from "react";
import { type AppointmentsStackType } from "../../../types";
import AppointmentsPage from "../../../../views/signed_in_stack/you_stack/appointments";
import AnAppointmentPage from "../../../../views/signed_in_stack/you_stack/appointments/an_appointment";

function AppointmentsSection(): ReactElement {
  const AppointmentsStack = createNativeStackNavigator<AppointmentsStackType>();

  return (
    <AppointmentsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppointmentsStack.Screen
        name="Appointments"
        component={AppointmentsPage}
      />
      <AppointmentsStack.Screen
        name="Your Latest Appointment"
        component={AnAppointmentPage}
      />
    </AppointmentsStack.Navigator>
  );
}

export default AppointmentsSection;
