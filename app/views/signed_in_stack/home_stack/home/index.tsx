import GovukButton from "../../../../components/button";
import { navigate } from "../../../../navigation/RootNavigation";
import Page from "../../../../components/page";
import * as React from "react";
import GovukH1 from "../../../../components/text/h1";
import GovukH3 from "../../../../components/text/h3";
import GovukH2 from "../../../../components/text/h2";

const ClaimantHomePage = () => {
  return (
    <Page
      content={[
        <GovukH1 text="govukH1" />,
        <GovukH2 text="govukH2" />,
        <GovukH3 text="govukH3" />,
        <GovukButton
          text="test"
          onPress={() =>
            navigate("SignIn", { screen: "Todo", params: { screen: "Home" } })
          }
        />,
      ]}
    />
  );
};

export default ClaimantHomePage;
