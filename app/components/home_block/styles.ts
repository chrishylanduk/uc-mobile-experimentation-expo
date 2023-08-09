import { StyleSheet } from "react-native";
import { GOVUK_FONT_SIZE_XS, GOVUK_WEIGHT } from "../constants/styles";

export const background = StyleSheet.create({
  background: {
      marginBottom: 30,
    },
});

export const itemStyle = StyleSheet.create({
  text: {
    fontWeight: GOVUK_WEIGHT,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: GOVUK_FONT_SIZE_XS,
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
  itemContainer: {
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    position: "relative",
    marginTop: -5,
    flexDirection: 'row',
    width: "100%",
  },
});
