import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const SplashPage = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/splash.png")}
        contentFit="contain"
      ></Image>
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    width: "90%",
    height: undefined,
    aspectRatio: 1434 / 1804,
  },
});
