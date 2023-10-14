import { View } from "react-native";
import React from "react";
import { type ReactElement } from "react";
import styles from "./styles";
import { Image } from "expo-image";

function LoadingPage(): ReactElement {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/splash.png")}
        contentFit="contain"
      ></Image>
    </View>
  );
}

export default LoadingPage;
