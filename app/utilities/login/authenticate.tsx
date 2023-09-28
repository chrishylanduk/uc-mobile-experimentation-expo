import * as LocalAuthentication from "expo-local-authentication";
import { type Dispatch, type SetStateAction } from "react";
import Constants from "expo-constants";

const authenticate = async (
  setUserId: Dispatch<SetStateAction<string>>
): Promise<void> => {
  try {
    const results = await LocalAuthentication.authenticateAsync();

    if (results.success) {
      const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/accountNumber/byId/' + Constants.manifest?.extra?.oneSignalAppId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const accountId = await response.json();
      setUserId(accountId);
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
