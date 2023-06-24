import { StyleSheet } from "react-native";
import { govuk_border_colour } from "../constants/colours";

const styles = StyleSheet.create({
  inset: {
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 10,
    borderLeftColor: govuk_border_colour,
    borderStyle: "solid",
  },
});

export default styles;
