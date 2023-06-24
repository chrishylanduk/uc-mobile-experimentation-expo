import { StyleSheet } from "react-native";
import { GOVUK_BOLD, GOVUK_FONT_SIZE_S } from "../constants/styles";

export const warning = StyleSheet.create({
  text: {
    fontWeight: GOVUK_BOLD,
    paddingLeft: 45,
    fontSize: GOVUK_FONT_SIZE_S,
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
