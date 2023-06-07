import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const GovukPanel = StyleSheet.create({
  panel: {
    "fontFamily": "arial",
    "fontWeight": "400",
    "fontSize": 16,
    "lineHeight": 1.25,
    "boxSizing": "border-box",
    "marginBottom": 15,
    "paddingTop": 35,
    "paddingRight": 35,
    "paddingBottom": 35,
    "paddingLeft": 35,
    "borderWidth": 5,
    "borderColor": "rgba(0,0,0,0)",
    "borderStyle": "solid",
    "textAlign": "center"
  },
  title: {
    "marginTop": 0,
    "marginBottom": 30,
    "fontFamily": "arial",
    "fontWeight": "700",
    "fontSize": 32,
    "lineHeight": 1.09375
  },
  body: {
    "fontFamily": "arial",
    "fontWeight": "400",
    "fontSize": 24,
    "lineHeight": 1.0416666667
  }
})