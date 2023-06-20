import * as LocalAuthentication from "expo-local-authentication";
import { type Dispatch, type SetStateAction } from "react";

const authenticate = async (
  setUserId: Dispatch<SetStateAction<string>>
): Promise<void> => {
  try {
    const results = await LocalAuthentication.authenticateAsync();

    if (results.success) {
      setUserId("user id");
    } else if (results.error === "unknown") {
      //
    } else if (
      results.error === "user_cancel" ||
      results.error === "system_cancel" ||
      results.error === "app_cancel"
    ) {
      //
    }
  } catch (error) {}
};

export default authenticate;
