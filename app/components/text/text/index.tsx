import React, { type FC } from "react";
import { type StyleProp, Text, type TextStyle } from "react-native";
import { type textPropType } from "./types";
import { commonText } from "../styles";
import { GOVUK_TEXT_COLOUR } from "../../constants/colours";

const GovukText: FC<textPropType> = (props) => {
  const style: StyleProp<TextStyle> = [
    commonText.text,
    commonText.commonText,
    props.colour != null
      ? { color: props.colour }
      : { color: GOVUK_TEXT_COLOUR },
  ];

  style.push(props.additionalStyle != null ? props.additionalStyle : []);

  return <Text style={style}>{props.text}</Text>;
};

export default GovukText;
