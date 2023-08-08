import { type FC } from "react";
import { ScrollView, View, Dimensions } from "react-native";
import { type pagePropType } from "./types";
import styles from "./styles";
import React from "react";

const Page: FC<pagePropType> = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        <View style={{ width: Dimensions.get('window').width < 400 ? "95%" : "80%", maxWidth: 500, minWidth: 300 }}>{props.content}</View>
      </View>
    </ScrollView>
  );
};

export default Page;
