import React, { type FC } from "react";
import { View } from "react-native";
import { type warningPropType } from "./types";
import { warning } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GovukText from "../text/text";

const Warning: FC<warningPropType> = (props) => {
  return (
    <View style={warning.warningContainer}>
      <FontAwesomeIcon
        icon={props.icon != null ? props.icon : "circle-exclamation"}
        style={warning.icon}
      />
      <GovukText text={props.text} additionalStyle={[warning.text]} />
    </View>
  );
};

export default Warning;
