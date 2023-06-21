import { StyleSheet } from "react-native";

export const GovukTable = StyleSheet.create({
  table: {
    fontFamily: "arial",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 1.25,
    color: "#0b0c0c",
    width: "100%",
    marginBottom: 20,
    borderSpacing: 0,
    borderCollapse: "collapse",
  },
  header: {
    fontWeight: "700",
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 0,
    borderBottom: "1px solid #b1b4b6",
    textAlign: "left",
    verticalAlign: "top",
  },
  cell: {
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 0,
    borderBottom: "1px solid #b1b4b6",
    textAlign: "left",
    verticalAlign: "top",
  },
});
