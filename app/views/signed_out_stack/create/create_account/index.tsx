import { type ReactElement, type SetStateAction } from "react";
import React, {useState} from "react";
import GovukButton from "../../../../components/button/default";
import GovukInput from "../../../../components/input";
import Page from "../../../../components/page";
import GovukText from "../../../../components/text/text";
import GovukH1 from "../../../../components/text/heading/h1";
import { GOVUK_ERROR_COLOUR } from "../../../../components/constants/colours";
import { navigate } from "../../../../navigation/RootNavigation";
import Constants from "expo-constants";
import LinkText from "../../../../components/text/link";
import GovukH3 from "../../../../components/text/heading/h3";

const CreateAccount = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <Page
      content={[
        <LinkText
          key={-1}
          text={"Back"}
          onPress={() => {
            navigate("SignedOut", {
              screen: "LogIn",
              params: { screen: "LoginButtonPage" },
            });
          }}
        />,
        <GovukH1 text={"Create Account"} key={0}/>,
        <GovukText text={error} colour={GOVUK_ERROR_COLOUR} key = {6}/>,
        <GovukH3 text="Email" additionalStyle={[{paddingTop: 0, marginBottom: 0,}]} key={1}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setEmail(text);
          }}
          keyboardType="email-address"
          textContentType="emailAddress"
          key={2}
        />,
        <GovukH3 text="Password" additionalStyle={[{paddingTop: 0, marginBottom: 0,}]} key={3}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setPassword(text);
          }}
          secureTextEntry
          textContentType="newPassword"
          key={4}
        />,
        <GovukH3 text="Re-enter password" additionalStyle={[{paddingTop: 0, marginBottom: 0,}]} key={8}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setReenterPassword(text);
          }}
          secureTextEntry
          textContentType="newPassword"
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
                    const accountResponse = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/accountNumber/' + email + '/' + password);
                    if (accountResponse.ok){
                      const accountId = await accountResponse.json();
                      if (accountId != null) {
                        navigate("SignedOut", {
                          screen: "LogIn",
                          params: { 
                            screen: "AccountDetails",
                            params: {accountId: accountId}
                          },
                        });
                      } else {
                        setError("An unknown error has occurred, please try again later")
                      }
                    } else {
                      setError("An unknown error has occurred, please try again later")
                    }
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
