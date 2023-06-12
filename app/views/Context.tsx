import * as React from "react";
import {PageContextType, UserIdContextType} from "./types/ContextTypes";

export const PushNotificationTokenContext = React.createContext<String>("default");
export const UserIdContext = React.createContext<UserIdContextType>({
    userId: "",
    setUserId: () => {}
});

export const PageContext = React.createContext<PageContextType>({
    page: {page: "Home", subpage: "Home", override: false},
    setPage: () => {},
});