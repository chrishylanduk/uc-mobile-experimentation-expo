import { ScrollView, StyleSheet, View, Image } from "react-native";
import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import BlockList from "../../../../components/button/block_list";
import GovukButton from "../../../../components/button/default";
import Inset from "../../../../components/inset";
import GovukHeadRow from "../../../../components/table/headRow";
import GovukRows from "../../../../components/table/rows";
import GovukTable from "../../../../components/table/table";
import Body from "../../../../components/text/body";
import GovukH1 from "../../../../components/text/heading/h1";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukH3 from "../../../../components/text/heading/h3";
import GovukText from "../../../../components/text/text";
import Warning from "../../../../components/warning";
import { navigate } from "../../../../navigation/RootNavigation";

const JournalPage = (): ReactElement => {
  return (
    <Page
      content={[
        <GovukH1 text="govukH1" key={1} />,
        <GovukH2 text="govukH2" key={2} />,
        <GovukH3 text="govukH3" key={3} />,
        <Body text={"Body"} key={7} />,
        <Warning text="Warning" key={5} />,
        <Warning text="Other warning" icon="ban" key={6} />,
        <GovukButton
          key={4}
          text="test"
          onPress={() => {
            navigate("SignIn", { screen: "Todo", params: { screen: "Home" } });
          }}
        />,
        <Inset content={<GovukText text={"inset text"} />} key={8} />,
        <BlockList
          text={"block"}
          onPress={() => {
            navigate("SignIn", { screen: "Todo", params: { screen: "Home" } });
          }}
          key={9}
        />,
        <GovukTable key={10}>
          <GovukHeadRow data={["Head", "Head2", "Head3", "Head4"]} />
          <GovukRows
            data={[
              ["1", "2", "3", "4"],
              ["a", "b", "c", "d"],
              ["1", "2", "3", "456\n789"],
              ["a", "b", "c", "d"],
            ]}
          />
        </GovukTable>,
      ]}
    />
  );
};

export default JournalPage;
