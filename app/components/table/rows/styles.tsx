import { StyleSheet } from "react-native";
import { GOVUK_BORDER_COLOUR } from "../../constants/colours";

export const govukRowsStyle = StyleSheet.create({
  text: { margin: 6 },
  style: { borderBottomWidth: 1, borderBottomColor: GOVUK_BORDER_COLOUR },
});
