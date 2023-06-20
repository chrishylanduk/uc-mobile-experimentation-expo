import GovukButton from "../../../../components/button";
import { navigate } from "../../../../navigation/RootNavigation";
import Page from "../../../../components/page";
import * as React from "react";
import GovukH1 from "../../../../components/text/h1";
import GovukH3 from "../../../../components/text/h3";
import GovukH2 from "../../../../components/text/h2";
import { type ReactElement } from "react";

const ClaimantHomePage = (): ReactElement => {
  return (
    <Page
      content={[
        <GovukH1 text="govukH1" key={1} />,
        <GovukH2 text="govukH2" key={2} />,
        <GovukH3 text="govukH3" key={3} />,
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
