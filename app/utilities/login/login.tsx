import { Dispatch, SetStateAction } from "react";

const login = (setUserId: Dispatch<SetStateAction<String>>) => {
  setUserId("user id");
};

export default login;
