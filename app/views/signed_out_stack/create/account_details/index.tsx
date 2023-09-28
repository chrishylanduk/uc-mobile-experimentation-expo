import { type ReactElement, type SetStateAction } from "react";
import React, {useState} from "react";
import GovukButton from "../../../../components/button/default";
import GovukInput from "../../../../components/input";
import Page from "../../../../components/page";
import GovukText from "../../../../components/text/text";
import GovukH1 from "../../../../components/text/heading/h1";
import { GOVUK_ERROR_COLOUR } from "../../../../components/constants/colours";
import { navigate } from "../../../../navigation/RootNavigation";
import LinkText from "../../../../components/text/link";
import GovukH3 from "../../../../components/text/heading/h3";

const AccountDetails = ({route}): ReactElement => {
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
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
              params: { screen: "CreateAccount" },
            });
          }}
        />,
        <GovukH1 text={"Account details"} key={0}/>,
        <GovukText text={error} colour={GOVUK_ERROR_COLOUR} key = {6}/>,
        <GovukH3 text="Given name" additionalStyle={[{paddingTop: 0, marginBottom: 0,}]} key={1}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setGivenName(text);
          }}
          textContentType="givenName"
          key={2}
        />,
        <GovukH3 text="Family name" additionalStyle={[{paddingTop: 0, marginBottom: 0,}]} key={3}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setFamilyName(text);
          }}
          textContentType="familyName"
          key={4}
        />,
        <GovukButton
          content="Submit"
          onPress={async () => {
              try {
                const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/personal/' + route.params.accountId, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    givenName: givenName,
                    familyName: familyName,
                  }),
                });
                if (!response.ok){
                  setError("An unknown error has occurred, please try again later")
                } else {
                  navigate("SignedOut", {
                    screen: "LogIn",
                    params: { screen: "LoginButtonPage" },
                  });
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

export default AccountDetails;
