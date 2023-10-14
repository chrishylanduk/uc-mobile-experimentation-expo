import { useContext, type ReactElement, type SetStateAction } from "react";
import React, {useState} from "react";
import Page from "../../../../../components/page";
import LinkText from "../../../../../components/text/link";
import { navigate } from "../../../../../navigation/RootNavigation";
import GovukH1 from "../../../../../components/text/heading/h1";
import GovukText from "../../../../../components/text/text";
import GovukH3 from "../../../../../components/text/heading/h3";
import GovukInput from "../../../../../components/input";
import GovukButton from "../../../../../components/button/default";
import { UserIdContext } from "../../../../Context";
import { GOVUK_ERROR_COLOUR } from "../../../../../components/constants/colours";

const UpdateName = (): ReactElement => {
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [error, setError] = useState('');
  const {userId} = useContext(UserIdContext);

  return (
    <Page
      content={[
        <LinkText
          key={-1}
          text={"Back"}
          onPress={() => {
            navigate("SignIn", {
              screen: "You",
              params: {
                screen: "About You",
                params: { screen: "About You Page" },
              },
            });
          }}
        />,
        <GovukH1 text={"Update your name"} key={0}/>,
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
          content="Confirm"
          onPress={async () => {
              try {
                const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/personal/' + userId, {
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
                  navigate("SignIn", {
                    screen: "You",
                    params: {
                      screen: "About You",
                      params: { screen: "About You Page" },
                    },
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

export default UpdateName;
