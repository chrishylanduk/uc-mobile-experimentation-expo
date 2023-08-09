import { StyleSheet } from "react-native";
import { GOVUK_BOLD, GOVUK_FONT_SIZE_S } from "../constants/styles";

export const warning = StyleSheet.create({
  text: {
    fontWeight: GOVUK_BOLD,
    paddingLeft: 10,
    fontSize: GOVUK_FONT_SIZE_S,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  icon: {
    minHeight: 35,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 35,
  },
  warningContainer: {
    alignItems: "center",
    textAlignVertical: "center",
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    marginTop: -5,
    flexDirection: 'row',
  },
});