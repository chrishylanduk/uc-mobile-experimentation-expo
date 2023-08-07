import { StyleSheet } from "react-native";
import { govuk_colour } from "../constants/colours";
import { GOVUK_FONT_SIZE_XS, GOVUK_WEIGHT } from "../constants/styles";

export const background = StyleSheet.create({
  background: {
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: govuk_colour.light_grey,
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
    textAlignVertical: "center",
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    marginTop: -5,
    flexDirection: 'row',
  },
});
