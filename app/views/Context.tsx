import * as React from "react";
import {
  type PageContextType,
  type UserIdContextType,
} from "./types/ContextTypes";

export const UserIdContext = React.createContext<UserIdContextType>({
  userId: "",
  setUserId: () => {},
});

export const PageContext = React.createContext<PageContextType>({
  page: { page: "Home", subpage: "Home Page", override: false },
  setPage: () => {},
});
