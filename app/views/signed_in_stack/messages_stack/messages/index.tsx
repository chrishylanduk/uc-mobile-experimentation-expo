import React, { type ReactElement } from "react";
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
import LinkText from "../../../../components/text/link";

const MessagesPage = (): ReactElement => {
  return (
    <Page
      content={[
        <GovukH2 text="Journal" key={1} />,
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
              screen: "Home",
              params: { screen: "Settings" },
            });
          }} key={4}
        />,
        <GovukH3 text="Journal entries" key={5}/>,
        <GovukTable key={6}>
          <GovukHeadRow data={["Date and time", "Message", "Added by"]} flexArr={[20, 60, 20]} key={1}/>
          <GovukRows
            flexArr={[20, 60, 20]}
            data={[
              ["6 Dec 2022 at 5:41pm", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas nisl nec elit tincidunt porta. Proin accumsan nulla nec tincidunt consequat. Morbi urna urna, dictum sit amet faucibus quis, tincidunt consequat ipsum. Nulla facilisi. Mauris sit amet erat fermentum mauris interdum vehicula. Proin orci magna, euismod ac gravida non, scelerisque sed tortor. Cras ullamcorper rhoncus elit, viverra suscipit arcu molestie ut.", "John Doe"],
              ["5 Dec 2022 at 5:41pm", "In at molestie sapien. In hac habitasse platea dictumst. Etiam sed nibh eros. Duis accumsan libero sed odio aliquam, vitae gravida sapien faucibus. Nam quis interdum leo. Suspendisse quam magna, tincidunt vitae luctus quis, malesuada in eros. Vivamus et gravida ante. Praesent eget dolor vel lectus convallis porta a sit amet tellus. Nulla facilisi.", "Bob Bob"],
              ["3 Dec 2022 at 5:41pm", "Caring for someone completed", "Annalise Smith"],
              ["2 Dec 2022 at 5:41pm", 
                <LinkText 
                text="New claim details were submitted" 
                onPress={() => {
                  navigate("SignIn", {
                    screen: "Home",
                    params: { screen: "Settings" },
                  })}}
                key={1}/>, 
                "Jane Doe"
              ],
            ]}
          key={2}/>
        </GovukTable>,
      ]}
    />
  );
};

export default MessagesPage;
