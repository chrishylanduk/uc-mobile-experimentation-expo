import GovukButton from "../../../../components/button";
import { navigate } from "../../../../navigation/RootNavigation";
import Page from "../../../../components/page";
import * as React from "react";
import { type ReactElement } from "react";
import GovukH1 from "../../../../components/text/heading/h1";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukH3 from "../../../../components/text/heading/h3";
import Warning from "../../../../components/warning";
import Body from "../../../../components/text/body";

const ClaimantHomePage = (): ReactElement | null => {
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
      ]}
    />
  );
};

export default ClaimantHomePage;
