import React, { useState, type ReactElement, useEffect, useContext } from "react";
import Page from "../../../../components/page";
import GovukButton from "../../../../components/button/default";
import GovukHeadRow from "../../../../components/table/headRow";
import GovukRows from "../../../../components/table/rows";
import GovukTable from "../../../../components/table/table";
import GovukH3 from "../../../../components/text/heading/h3";
import GovukText from "../../../../components/text/text";
import { navigate } from "../../../../navigation/RootNavigation";
import UL from "../../../../components/text/ul";
import GovukH2 from "../../../../components/text/heading/h2";
import { format } from "date-fns";
import { UserIdContext } from "../../../Context";

const MessagesPage = (): ReactElement => {
  const {userId} = useContext(UserIdContext);
  const [journals, setJournals] = useState<Journal[]>([]);

  const getJournals = async () => {
    try {
      const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/journal/' + userId);
      const journals = await response.json();
      setJournals(journals)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getJournals();
    }, 1000);
  }, []);

  return (
    <Page
      content={[
        <GovukH2 text="Journal" key={1}/>,
        <GovukText text="Use your journal to:" key={2}/>,
        <UL content={[
          <GovukText text="add details about your work search" key={1}/>,
          <GovukText text="leave messages for Universal Credit" key={2}/>,
          <GovukText text="view your Universal Credit account history" key={3}/>
        ]} key={3}/>,
        <GovukButton 
          content="Add a journal entry" 
          onPress={() => {
            navigate("SignIn", {
              screen: "Messages",
              params: { screen: "Add Journal" },
            });
          }} key={4}
        />,
        <GovukH3 text="Journal entries" key={5}/>,
        journals.length == 0 ?
          <GovukText text="No journal entries" key={6}/>
        :
          <GovukTable key={6}>
            <GovukHeadRow data={["Date and time", "Message", "Added by"]} flexArr={[20, 60, 20]} key={1}/>
            <GovukRows
              flexArr={[20, 60, 20]}
              data={
                journals.map(journal =>
                  [format(new Date(journal.date), "dd MMM yyyy"), journal.entry, journal.person]
                )}
            key={2}/>
          </GovukTable>,
      ]}
    />
  );
};

export default MessagesPage;
