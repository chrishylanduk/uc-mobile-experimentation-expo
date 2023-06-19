import { Dispatch, SetStateAction } from "react";
import {
  HomeStackType,
  JournalStackType,
  SettingsStackType,
  SignedInStackType,
  TodoStackType,
} from "../../navigation/types";

export type UserIdContextType = {
  userId: String;
  setUserId: Dispatch<SetStateAction<String>>;
};

export type PageType = {
  page: keyof SignedInStackType;
  subpage:
    | keyof HomeStackType
    | keyof JournalStackType
    | keyof SettingsStackType
    | keyof TodoStackType;
  override: boolean;
};

export type PageContextType = {
  page: PageType;
  setPage: Dispatch<SetStateAction<PageType>>;
};
