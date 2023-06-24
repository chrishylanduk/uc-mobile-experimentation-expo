import { StyleSheet } from "react-native";
import { govuk_font_size_xs, govuk_weight } from "../constants/styles";

export const commonText = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
  },
  commonText: {
    fontSize: govuk_font_size_xs,
    fontWeight: govuk_weight,
  },
});
