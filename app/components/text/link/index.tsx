import React, { type FC } from "react";
import { type StyleProp, Text, type TextStyle } from "react-native";
import { type textPropType } from "./types";
import { commonText } from "../styles";
import { GOVUK_LINK_COLOUR } from "../../constants/colours";
import { Pressable } from "react-native";
import { GOVUK_BOLD, GOVUK_WEIGHT } from "../../constants/styles";

const LinkText: FC<textPropType> = (props) => {
  const style: StyleProp<TextStyle> = [
    commonText.text,
    commonText.commonText,
    props.colour != null
      ? { color: props.colour }
      : { color: GOVUK_LINK_COLOUR },
    {textDecorationLine: "underline"},
  ];

  style.push(props.additionalStyle != null ? props.additionalStyle : []);

  return (
    <Pressable 
      onPress={props.onPress}
      >
      {({pressed}) => (
          <Text style={[style, {fontWeight: pressed ? GOVUK_BOLD : GOVUK_WEIGHT}]}>
            {props.text}
          </Text>
        )}
    </Pressable>
    );
};

export default LinkText;
