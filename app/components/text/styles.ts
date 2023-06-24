import { StyleSheet } from "react-native";
import { GOVUK_FONT_SIZE_XS, GOVUK_WEIGHT } from "../constants/styles";

export const commonText = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
  },
  commonText: {
    fontSize: GOVUK_FONT_SIZE_XS,
    fontWeight: GOVUK_WEIGHT,
  },
});
