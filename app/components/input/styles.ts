import { StyleSheet } from "react-native";
import { GOVUK_BORDER_COLOUR } from "../constants/colours";

const styles = StyleSheet.create({
  border: {
    position: "relative",
    borderRadius: 0,
    borderWidth: 3,
    borderStyle: "solid",
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 7,
    paddingLeft: 10,
    borderWidth: 0,
    textAlignVertical: "top",
  }
});

export default styles;
