import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import PersistentToggle from "../../../../components/persistent_toggle";
import LinkText from "../../../../components/text/link";
import { navigate } from "../../../../navigation/RootNavigation";

const HomeSettingsPage = (): ReactElement => {
  return (
    <Page
      content={[
        <LinkText
          key={0}
          text={"Back"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Settings",
              params: {
                screen: "Settings Page",
              },
            });
          }}
        ></LinkText>,
        <GovukH2 text="Customise home page" key={1} />,
        <PersistentToggle
          key={2}
          text="Show jobs from Find a Job"
          asyncToggleKey="homeViewFindAJob"
        ></PersistentToggle>,
      ]}
    />
  );
};

export default HomeSettingsPage;
