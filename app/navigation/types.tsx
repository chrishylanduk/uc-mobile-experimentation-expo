import {NavigatorScreenParams} from "@react-navigation/native";

export type RootNavigationType = {
    SignedOut: NavigatorScreenParams<SignedOutStackType>;
    SignIn: NavigatorScreenParams<SignedInStackType>;
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
    Home: undefined;
}

export type JournalStackType = {
    Journal: undefined;
}

export type SettingsStackType = {
    Settings: undefined;
}

export type TodoStackType = {
    'Todo Page': undefined;
    Appointments: undefined;
}

