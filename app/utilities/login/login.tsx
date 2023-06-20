import { type Dispatch, type SetStateAction } from "react";

const login = (setUserId: Dispatch<SetStateAction<string>>): void => {
  setUserId("user id");
};

export default login;
