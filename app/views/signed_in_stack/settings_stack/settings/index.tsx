import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import BlockList from "../../../../components/button/block_list";
import { navigate } from "../../../../navigation/RootNavigation";

const SettingsPage = (): ReactElement => {
  return (
    <Page
      content={[
        <GovukH2 text="Settings" key={1} />,
        <BlockList
          contents={"Personal details"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={2}
        />,
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
          contents={"App biometrics & PIN"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={6}
        />,
        <BlockList
          contents={"Language"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={7}
        />,
      ]}
    />
  );
};

export default SettingsPage;
