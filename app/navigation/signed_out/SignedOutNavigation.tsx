import * as React from "react";
import * as LocalAuthentication from "expo-local-authentication";
import SplashPage from "../../views/signed_out_stack/splash";
import LoginPage from "../../views/signed_out_stack/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type SignedOutStackType } from "../types";
import { type ReactElement } from "react";

function SignedOutSection(): ReactElement {
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [checkedBio, setCheckedBio] = React.useState<Promise<boolean>>();
  const SignedOutStack = createNativeStackNavigator<SignedOutStackType>();

  const checkSupportedAuthentication = async (): Promise<boolean> => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types != null && types.length > 0) {
      setFacialRecognitionAvailable(
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      );
      setFingerprintAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
      );
      setIrisAvailable(
        types.includes(LocalAuthentication.AuthenticationType.IRIS)
      );
    }
    return true;
  };

  React.useEffect(() => {
    setCheckedBio(checkSupportedAuthentication());
  }, []);

  return (
    <SignedOutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {facialRecognitionAvailable ||
      fingerprintAvailable ||
      irisAvailable ||
      checkedBio == null ? (
        <SignedOutStack.Screen name="Splash" component={SplashPage} /> // Todo pass in result to use in if above
      ) : (
        <SignedOutStack.Screen name="LoginButtonPage" component={LoginPage} />
      )}
    </SignedOutStack.Navigator>
  );
}

export default SignedOutSection;
