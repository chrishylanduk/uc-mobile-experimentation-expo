import React, { useContext, type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import BlockList from "../../../../components/button/block_list";
import { navigate } from "../../../../navigation/RootNavigation";
import { UserIdContext } from "../../../Context";

const SettingsPage = (): ReactElement => {
  const { setUserId } = useContext(UserIdContext);

  return (
    <Page
      content={[
        <GovukH2 text="Settings" key={1} />,
        <BlockList
          contents={"Accessibility"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={3}
        />,
        <BlockList
          contents={"Communication & notifications"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={4}
        />,
        <BlockList
          contents={"Help & support"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={5}
        />,
        <BlockList
          contents={"App biometrics"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Settings",
              params: { screen: "Biometrics Settings Page" },
            });
          }}
          key={6}
        />,
        <BlockList
          contents={"Customise home page"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Settings",
              params: { screen: "Home Settings Page" },
            });
          }}
          key={7}
        />,
        <BlockList
          contents={"Language"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={8}
        />,
        <BlockList
          contents={"Sign out"}
          onPress={async () => {
            setUserId("");
          }}
          key={9}
        />,
      ]}
    />
  );
};

export default SettingsPage;
