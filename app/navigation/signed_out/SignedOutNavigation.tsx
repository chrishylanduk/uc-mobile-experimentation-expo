import * as React from "react";
import * as LocalAuthentication from "expo-local-authentication";
import SplashPage from "../../views/signed_out_stack/splash";
import LoginPage from "../../views/signed_out_stack/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type LoginStackType, type SignedOutStackType } from "../types";
import { type ReactElement } from "react";
import CreateAccount from "../../views/signed_out_stack/create/create_account";
import LogoTitle from "../../components/logo_title";
import { readData } from "../../utilities/data_storage/data_storage";
import AccountDetails from "../../views/signed_out_stack/create/account_details";

function LogInSection(): ReactElement {
  const SignedOut = createNativeStackNavigator<LoginStackType>();

  return (
    <SignedOut.Navigator
    screenOptions={({ route }) => ({
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#1d70b8",
      },
      headerTintColor: "#fff",
      tabBarActiveTintColor: "#1d70b8",
      tabBarInactiveTintColor: "gray",
      // @ts-expect-error Temporary
      headerTitle: (props) => <LogoTitle {...props} />,
    })}
    >
      <SignedOut.Screen name="LoginButtonPage" component={LoginPage} />
      <SignedOut.Screen name="CreateAccount" component={CreateAccount} />
      <SignedOut.Screen name="AccountDetails" component={AccountDetails} />
    </SignedOut.Navigator>
  );
}

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
    void (async () => {
      const result = await readData("biometricLogin");
      if (result === "true") {
        setCheckedBio(checkSupportedAuthentication());
      } else {
        setCheckedBio(Promise.resolve(true))
      }
    })();
  }, []);

  return (
    <SignedOutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {checkedBio == null ? (
        <SignedOutStack.Screen name="Splash" component={SplashPage} />
      ) : (
        <SignedOutStack.Screen name="LogIn" component={LogInSection} />
      )}
    </SignedOutStack.Navigator>
  );
}

export default SignedOutSection;
