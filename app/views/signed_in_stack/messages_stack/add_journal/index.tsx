import React, { useState, type ReactElement, type SetStateAction, useContext } from "react";
import Page from "../../../../components/page";
import GovukButton from "../../../../components/button/default";
import GovukText from "../../../../components/text/text";
import { navigate } from "../../../../navigation/RootNavigation";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukInput from "../../../../components/input";
import { UserIdContext } from "../../../Context";
import LinkText from "../../../../components/text/link";
import { GOVUK_ERROR_COLOUR } from "../../../../components/constants/colours";

const AddJournal = (): ReactElement => {
  const [entry, setEntry] = useState('');
  const [error, setError] = useState('');
  const {userId} = useContext(UserIdContext);

  const postJournal = async () => {
    try {
      const result = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/journal/' + userId, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          entry: entry,
          date: new Date(),
          person: "You",
        }),
      });
      if (result.ok) {
        navigate("SignIn", {
          screen: "Journal",
          params: { screen: "Messages Page" },
        })
      }
      setError("A network error has occurred, please try again later")
    } catch (error) {
      console.error(error)
      setError("A network error has occurred, please try again later")
    }
  }

  return (
    <Page
      content={[
        <LinkText
          key={-1}
          text={"Back"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Journal",
              params: { screen: "Messages Page" },
            });
          }}
        />,
        <GovukH2 text="Add journal entry" key={1} />,
        <GovukText text={error} colour={GOVUK_ERROR_COLOUR} key = {6}/>,
        <GovukText text="Write a journal message" key={2}/>,
        <GovukInput
          onChangeText={(text: SetStateAction<string>) => {
            setEntry(text);
          }}
          multiline={true}
          key={3}
        />,
        <GovukButton 
          content="Add a journal entry" 
          onPress={async () => {
            await postJournal();
          }} key={4}
        />,
      ]}
    />
  );
};

export default AddJournal;
