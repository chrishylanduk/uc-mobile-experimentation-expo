import { StyleSheet } from "react-native";

export const warning = StyleSheet.create({
  text: {
    fontWeight: "700",
    paddingLeft: 45,
    fontSize: 19,
  },
  icon: {
    position: "absolute",
    minWidth: 35,
    minHeight: 35,
    marginTop: 8,
    fontWeight: "700",
    fontSize: 30,
  },
  container: {
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    marginTop: -5,
  },
});
