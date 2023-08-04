import { Row } from "react-native-reanimated-table";
import { type FC } from "react";
import React from "react";
import type { govukHeadRowType } from "./types";
import { govukHeadRowStyle } from "./styles";

const GovukHeadRow: FC<govukHeadRowType> = (props) => {
  const combinedStyle = [govukHeadRowStyle.head, props.style];
  const combinedTextStyle = [govukHeadRowStyle.text, props.textStyle];

  return <Row {...props} style={combinedStyle} textStyle={combinedTextStyle} />;
};

export default GovukHeadRow;
