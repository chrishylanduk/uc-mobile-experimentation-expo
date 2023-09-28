import { type ReactElement, useContext, type SetStateAction } from "react";
import { UserIdContext } from "../../Context";
import React, {useState} from "react";
import authenticate from "../../../utilities/login/authenticate";
import GovukButton from "../../../components/button/default";
import GovukInput from "../../../components/input";
import Page from "../../../components/page";
import GovukText from "../../../components/text/text";
import GovukH1 from "../../../components/text/heading/h1";
import { GOVUK_ERROR_COLOUR, GOVUK_TEXT_COLOUR, govuk_colour } from "../../../components/constants/colours";
import { navigate } from "../../../navigation/RootNavigation";
import { readData } from "../../../utilities/data_storage/data_storage";
import GovukH3 from "../../../components/text/heading/h3";

const LoginPage = (): ReactElement => {
  const { setUserId } = useContext(UserIdContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    void (async () => {
      const result = await readData("biometricLogin");
      if (result === "true") {
        void authenticate(setUserId).catch();
      }
    })();
  }, []);

  return (
    <Page
      content={[
        <GovukH1 text={"Sign In"} key={0}/>,
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
          textContentType="password"
          key={4}
        />,
        <GovukButton
          content="Sign in"
          onPress={async () => {
            try {
              const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/accountNumber/' + email + '/' + password);
              if (response.ok){
                const accountId = await response.json();
                if (accountId != null) {
                  setUserId(accountId);
                } else {
                  setError("Incorrect email or password")
                }
              }
            } catch (error) {
              setError("A network error has occurred, please try again later")
            }
          }}
          key={5}
        />,
        <GovukButton
          content="Create Account"
          backgroundColour={govuk_colour.mid_grey}
          textColour={GOVUK_TEXT_COLOUR}
          onPress={ async () => {
            navigate("SignedOut", {
              screen: "LogIn",
              params: { screen: "CreateAccount" },
            });
            }
          }
          key={9}
        />
      ]}
    />
  );
};

export default LoginPage;
