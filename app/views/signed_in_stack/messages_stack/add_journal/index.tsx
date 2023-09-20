import React, { useState, type ReactElement, type SetStateAction, useContext } from "react";
import Page from "../../../../components/page";
import GovukButton from "../../../../components/button/default";
import GovukText from "../../../../components/text/text";
import { navigate } from "../../../../navigation/RootNavigation";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukInput from "../../../../components/input";
import { UserIdContext } from "../../../Context";

const AddJournal = (): ReactElement => {
  const [entry, setEntry] = useState('');
  const {userId} = useContext(UserIdContext);

  const postJournal = async () => {
    try {
      await fetch('https://uc-mobile-exp-backend-production.up.railway.app/journal/' + userId, {
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
    } catch (error) {
      console.error(error)
    } finally {
      navigate("SignIn", {
        screen: "Journal",
        params: { screen: "Messages Page" },
      })
    }
  }

  return (
    <Page
      content={[
        <GovukH2 text="Add journal entry" key={1} />,
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
