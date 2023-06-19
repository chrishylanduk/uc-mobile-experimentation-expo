import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    marginBottom: 22,
    alignItems: "center",
    maxWidth: "100%",
  },
  buttonCommon: {
    position: "relative",
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 7,
    paddingLeft: 10,
    borderRadius: 0,
    borderWidth: 3,
    borderStyle: "solid",
    backgroundColor: "#00703c",
    alignItems: "center",
  },
  wrapperCustom: {
    borderColor: "rgba(0, 0, 0, 0)",
  },
  pressedDown: {
    borderColor: "#fd0",
  },
});

export default styles;
