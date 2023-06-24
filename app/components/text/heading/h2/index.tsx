import React, { type FC } from "react";
import styles from "./styles";
import { headerText } from "../styles";
import GovukText from "../../text";
import { type nonDefaultTextPropType } from "../../types";

const GovukH2: FC<nonDefaultTextPropType> = (props) => {
  return (
    <GovukText
      text={props.text}
      additionalStyle={[headerText.header, styles.h2]}
    />
  );
};

export default GovukH2;
