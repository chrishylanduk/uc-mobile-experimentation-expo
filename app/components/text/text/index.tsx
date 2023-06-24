import React, { type FC } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { type textPropType } from "./types";
import { commonText } from "../styles";
import {
  govuk_text_colour,
} from "../../constants/colours";

const GovukText: FC<textPropType> = (props) => {
  let style: StyleProp<TextStyle> = [
    commonText.text,
    commonText.commonText,
    props.colour ? { color: props.colour } : { color: govuk_text_colour },
  ];

  style.push(props.additionalStyle ? props.additionalStyle : []);

  return <Text style={style}>{props.text}</Text>;
};

export default GovukText;
