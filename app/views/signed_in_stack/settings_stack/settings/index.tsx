import { Animated, Pressable, StyleSheet, View, Image } from "react-native";
import React, { type ReactElement } from "react";
import ScrollView = Animated.ScrollView;
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
          text={"Personal details"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={2}
        />,
        <BlockList
          text={"Accessbility"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={3}
        />,
        <BlockList
          text={"Communication & notifications"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={4}
        />,
        <BlockList
          text={"Help & support"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={5}
        />,
        <BlockList
          text={"App biometrics & PIN"}
          onPress={() => {
            navigate("SignIn", {
              screen: "Home",
              params: { screen: "Settings" },
            });
          }}
          key={6}
        />,
        <BlockList
          text={"Language"}
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
