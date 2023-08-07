import { StyleSheet } from "react-native";
import { govuk_colour } from "../constants/colours";
import { GOVUK_FONT_SIZE_XS, GOVUK_WEIGHT } from "../constants/styles";

export const background = StyleSheet.create({
  background: {
    marginBottom: 8,
  },
});

export const itemStyle = StyleSheet.create({
  text: {
    fontWeight: GOVUK_WEIGHT,
    paddingLeft: 15,
    paddingRight: 10,
    fontSize: GOVUK_FONT_SIZE_XS,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  icon: {
    minHeight: 28,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 28,
    color: govuk_colour.dark_grey,
  },
  chevron: {
    minHeight: 15,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 15,
  },
  itemContainer: {
    alignItems: "center",
    textAlignVertical: "center",
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    position: "relative",
    marginTop: -5,
    flexDirection: "row",
    backgroundColor: govuk_colour.light_grey,
    borderBottomWidth: 1,
    borderBottomColor: govuk_colour.mid_grey,
  },
});
