import React, { type FC } from "react";
import { Text } from "react-native";
import styles from "./styles";
import { type textPropType } from "../types";
import { commonText } from "../styles";

const Body: FC<textPropType> = (props) => {
  return (
    <Text style={[commonText.text, commonText.commonText, styles.body]}>
      {props.text}
    </Text>
  );
};

export default Body;
