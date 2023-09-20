import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukButton from "../../../../components/button/default";
import { navigate } from "../../../../navigation/RootNavigation";

const OffersPage = (): ReactElement => {
  return (
    <Page
      content={[
        <GovukH2 text="Offers" key={1} />,
        <GovukButton
          key={2}
          content={"View your Universal Credit certificate"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Offers",
              params: {
                screen: "Certificate Page",
              },
            });
          }}
        ></GovukButton>,
      ]}
    />
  );
};

export default OffersPage;
