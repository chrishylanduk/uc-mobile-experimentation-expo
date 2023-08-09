import { StyleSheet } from "react-native";
import { GOVUK_BOLD } from "../../constants/styles";
import { GOVUK_BORDER_COLOUR } from "../../constants/colours";

export const govukHeadRowStyle = StyleSheet.create({
  head: {
    borderBottomWidth: 1,
    borderBottomColor: GOVUK_BORDER_COLOUR,
  },
  text: { margin: 6, fontWeight: GOVUK_BOLD },
});
