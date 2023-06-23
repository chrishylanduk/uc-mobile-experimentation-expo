import React, { type FC } from "react";
import { Text } from "react-native";
import { type textPropType } from "../types";
import { commonText } from "../styles";

const GovukText: FC<textPropType> = (props) => {
  return (
    <Text style={[commonText.text, commonText.commonText]}>{props.text}</Text>
  );
};

export default GovukText;
