import { StyleSheet } from "react-native";
import { GOVUK_BORDER_COLOUR } from "../constants/colours";

const styles = StyleSheet.create({
  inset: {
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 10,
    borderLeftColor: GOVUK_BORDER_COLOUR,
    borderStyle: "solid",
  },
});

export default styles;
