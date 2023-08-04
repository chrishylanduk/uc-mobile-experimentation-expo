import { type FC } from "react";
import { ScrollView, View } from "react-native";
import { type pagePropType } from "./types";
import styles from "./styles";

const Page: FC<pagePropType> = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        <View style={{ width: "80%" }}>{props.content}</View>
      </View>
    </ScrollView>
  );
};

export default Page;
