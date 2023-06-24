import { StyleSheet } from "react-native";
import { govuk_bold, govuk_font_size_s } from "../constants/styles";

export const warning = StyleSheet.create({
  text: {
    fontWeight: govuk_bold,
    paddingLeft: 45,
    fontSize: govuk_font_size_s,
  },
  icon: {
    position: "absolute",
    minWidth: 35,
    minHeight: 35,
    marginTop: 8,
  },
  warningContainer: {
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    marginTop: -5,
  },
});
