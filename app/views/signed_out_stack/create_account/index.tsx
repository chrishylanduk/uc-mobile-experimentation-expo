import { type ReactElement, type SetStateAction } from "react";
import React, {useState} from "react";
import GovukButton from "../../../components/button/default";
import GovukInput from "../../../components/input";
import Page from "../../../components/page";
import GovukText from "../../../components/text/text";
import GovukH1 from "../../../components/text/heading/h1";
import { GOVUK_ERROR_COLOUR } from "../../../components/constants/colours";
import { navigate } from "../../../navigation/RootNavigation";
import Constants from "expo-constants";

const CreateAccount = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <Page
      content={[
        <GovukH1 text={"Create Account"} key={0}/>,
        <GovukText text={error} colour={GOVUK_ERROR_COLOUR} key = {6}/>,
        <GovukText text="Email" key={1}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setEmail(text);
          }}
          keyboardType="email-address"
          textContentType="emailAddress"
          key={2}
        />,
        <GovukText text="Password" key={3}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setPassword(text);
          }}
          secureTextEntry
          key={4}
        />,
        <GovukText text="Re-enter password" key={8}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setReenterPassword(text);
          }}
          secureTextEntry
          key={7}
        />,
        <GovukButton
          content="Create account"
          onPress={async () => {
              try {
                if (password === reenterPassword) {
                  const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/account', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      email: email,
                      password: password,
                      deviceId: Constants.manifest?.extra?.oneSignalAppId,
                    }),
                  });
                  if (!response.ok){
                    if (response.status === 500) {
                      setError('Email has already been used')
                    } else {
                      setError("An unknown error has occurred, please try again later")
                    }
                  } else {
                    navigate("SignedOut", {
                      screen: "LogIn",
                      params: { screen: "LoginButtonPage" },
                    });
                  }
                } else {
                  setError("Passwords must match")
                }
              } catch (error) {
                setError("A network error has occurred, please try again later")
              }
            }
          }
          key={5}
        />
      ]}
    />
  );
};

export default CreateAccount;
