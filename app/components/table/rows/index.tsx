import { Rows } from "react-native-reanimated-table";
import { type FC } from "react";
import type { govukRowsType } from "./types";
import { govukRowsStyle } from "./styles";
import React from "react";

const GovukRows: FC<govukRowsType> = (props) => {
  const combinedTextStyle = [govukRowsStyle.text, props.textStyle];
  const combinedStyle = [govukRowsStyle.style, props.style];
  return (
    <Rows {...props} textStyle={combinedTextStyle} style={combinedStyle} />
  );
};

export default GovukRows;
