import React, { type FC } from "react";
import styles from "./styles";
import { headerText } from "../heading/styles";
import GovukText from "../text";
import { nonDefaultTextPropType } from "../types";

const Body: FC<nonDefaultTextPropType> = (props) => {
  return (
    <GovukText
      text={props.text}
      additionalStyle={[headerText.header, styles.body]}
    />
  );
};

export default Body;
