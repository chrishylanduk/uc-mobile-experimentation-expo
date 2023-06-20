import { type FC } from "react";
import { Text } from "react-native";
import { type textPropType } from "../types";
import styles from "./styles";
import { commonText } from "../styles";
import React from "react";

const GovukH2: FC<textPropType> = (props) => {
  return (
    <Text style={[styles.container, commonText.container]}>
      <Text style={[styles.h2, commonText.header]}>{props.text}</Text>
    </Text>
  );
};

export default GovukH2;
