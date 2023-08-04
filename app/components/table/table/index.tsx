import { Table } from "react-native-reanimated-table";
import { type FC } from "react";
import { govukTableType } from "./types";
import { govukTableStyle } from "./styles";

const GovukTable: FC<govukTableType> = (props) => {
  const combinedStyle = [govukTableStyle.style, props.style];
  return (
    <Table
      borderStyle={govukTableStyle.border}
      style={combinedStyle}
      {...props}
    >
      {props.children}
    </Table>
  );
};

export default GovukTable;
