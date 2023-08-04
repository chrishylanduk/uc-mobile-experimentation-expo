import { Animated, StyleSheet, View, Image } from "react-native";
import ScrollView = Animated.ScrollView;
import { type ReactElement } from "react";
import React from "react";
import Inset from "../../../../components/inset";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukH3 from "../../../../components/text/heading/h3";
import GovukText from "../../../../components/text/text";

const TodoPage = (): ReactElement => {
  return <Page content={[<GovukH2 text="To-do list" key={1} />]} />;
};

export default TodoPage;
