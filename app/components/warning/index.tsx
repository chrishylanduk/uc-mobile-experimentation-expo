import React, { type FC } from "react";
import { Text, View } from "react-native";
import { type warningPropType } from "./types";
import { commonText } from "../text/styles";
import { headerText } from "../text/heading/styles";
import { warning } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Warning: FC<warningPropType> = (props) => {
  return (
    <View style={warning.container}>
      <FontAwesomeIcon
        icon={props.icon != null ? props.icon : "circle-exclamation"}
        style={warning.icon}
      />
      <Text style={[commonText.text, headerText.header, warning.text]}>
        {props.text}
      </Text>
    </View>
  );
};

export default Warning;
