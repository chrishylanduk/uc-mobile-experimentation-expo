import { StyleSheet } from "react-native";

export const GovukText = StyleSheet.create({
  textLarge: {
    "color": "#0b0c0c",
    "fontFamily": "arial",
    "fontWeight": "400",
    "fontSize": 19,
    "lineHeight": 1.25,
    "marginTop": 0,
    "marginBottom": 15
  },
  textSmall: {
    "color": "#0b0c0c",
    "fontFamily": "arial",
    "fontWeight": "400",
    "fontSize": 16,
    "lineHeight": 1.1428571429,
    "marginTop": 0,
    "marginBottom": 15
  },
})

export const commonText = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
  },
  header: {
    color: "#0b0c0c",
    fontFamily: "arial",
    fontWeight: '700',
  }
})
