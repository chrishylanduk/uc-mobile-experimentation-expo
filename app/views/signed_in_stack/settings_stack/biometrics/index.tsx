import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import PersistentToggle from "../../../../components/persistent_toggle";
import LinkText from "../../../../components/text/link";
import { navigate } from "../../../../navigation/RootNavigation";

const BiometricsSettingsPage = (): ReactElement => {
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
        <GovukH2 text="Log in using biometrics" key={1} />,
        <PersistentToggle
          key={2}
          text="Log in to my Universal Credit app using biometrics (fingerprint, face or retina)"
          asyncToggleKey="biometricLogin"
        ></PersistentToggle>,
      ]}
    />
  );
};

export default BiometricsSettingsPage;
