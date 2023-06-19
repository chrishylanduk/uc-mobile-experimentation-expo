import { NavigatorScreenParams } from "@react-navigation/native";

export type RootNavigationType = {
  SignedOut: NavigatorScreenParams<SignedOutStackType>;
  SignIn: NavigatorScreenParams<SignedInStackType>;
  SignInLoading: undefined;
};

export type SignedInStackType = {
  Home: NavigatorScreenParams<HomeStackType>;
  Todo: NavigatorScreenParams<TodoStackType>;
  Journals: NavigatorScreenParams<JournalStackType>;
  Settings: NavigatorScreenParams<SettingsStackType>;
};

export type SignedOutStackType = {
  Splash: undefined;
  LoginButtonPage: undefined;
};

export type HomeStackType = {
  "Home Page": undefined;
};

export type JournalStackType = {
  "Journal Page": undefined;
};

export type SettingsStackType = {
  "Settings Page": undefined;
};

export type TodoStackType = {
  "Todo Page": undefined;
  Appointments: undefined;
};
