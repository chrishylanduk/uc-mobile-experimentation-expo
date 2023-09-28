import { type NavigatorScreenParams } from "@react-navigation/native";

export type RootNavigationType = {
  SignedOut: NavigatorScreenParams<SignedOutStackType>;
  SignIn: NavigatorScreenParams<SignedInStackType>;
  SignInLoading: undefined;
};

export type SignedInStackType = {
  Home: NavigatorScreenParams<HomeStackType>;
  "To-dos": NavigatorScreenParams<TodoStackType>;
  Journal: NavigatorScreenParams<MessagesStackType>;
  Settings: NavigatorScreenParams<SettingsStackType>;
  Offers: NavigatorScreenParams<OffersStackType>;
  You: NavigatorScreenParams<YouStackType>;
};

export type SignedOutStackType = {
  Splash: undefined;
  LogIn: NavigatorScreenParams<LoginStackType>;
};

export type LoginStackType = {
  LoginButtonPage: undefined;
  CreateAccount: undefined;
  AccountDetails: undefined;
}

export type HomeStackType = {
  "Home Page": undefined;
};

export type MessagesStackType = {
  "Messages Page": undefined;
  "Add Journal": undefined;
};

export type SettingsStackType = {
  "Settings Page": undefined;
  "Home Settings Page": undefined;
  "Biometrics Settings Page": undefined;
};

export type OffersStackType = {
  "Offers Page": undefined;
  "Certificate Page": undefined;
};

export type YouStackType = {
  "You Page": undefined;
  Appointments: undefined;
};

export type TodoStackType = {
  "Todo Page": undefined;
};

export type AppointmentsStackType = {
  Appointments: undefined;
  "Your Latest Appointment": undefined;
};
