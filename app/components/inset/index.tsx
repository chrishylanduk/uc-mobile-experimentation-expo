import { type insetPropType } from "./types";
import { type FC } from "react";
import styles from "./styles";
import React from "react";
import { View } from "react-native";

const GovukInset: FC<insetPropType> = (props) => {
  return <View style={styles.inset}>{props.content}</View>;
};

export default GovukInset;
