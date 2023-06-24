import React, { type FC } from "react";
import styles from "./styles";
import { headerText } from "../styles";
import GovukText from "../../text";
import { nonDefaultTextPropType } from "../../types";

const GovukH3: FC<nonDefaultTextPropType> = (props) => {
  return (
    <GovukText
      text={props.text}
      additionalStyle={[headerText.header, styles.h3]}
    />
  );
};

export default GovukH3;
