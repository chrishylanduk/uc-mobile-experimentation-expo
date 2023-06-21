import { type FC } from "react";
import { Text } from "react-native";
import styles from "./styles";
import { type textPropType } from "../types";
import { commonText } from "../styles";
import React from "react";

const GovukH1: FC<textPropType> = (props) => {
  return (
    <Text style={[styles.container, commonText.container]}>
      <Text style={[styles.h1, commonText.header]}>{props.text}</Text>
    </Text>
  );
};

export default GovukH1;
