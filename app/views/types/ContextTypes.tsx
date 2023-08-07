import { type Dispatch, type SetStateAction } from "react";
import {
  type HomeStackType,
  type MessagesStackType,
  type SettingsStackType,
  type SignedInStackType,
  type TodoStackType,
} from "../../navigation/types";

export type UserIdContextType = {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
};

export type PageType = {
  page: keyof SignedInStackType;
  subpage:
    | keyof HomeStackType
    | keyof MessagesStackType
    | keyof SettingsStackType
    | keyof TodoStackType;
  override: boolean;
};

export type PageContextType = {
  page: PageType;
  setPage: Dispatch<SetStateAction<PageType>>;
};
