import { Image } from "react-native";
import * as React from "react";

function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 45 }}
      source={require("../../../assets/images/fullLogo.png")}
    />
  );
}

export default LogoTitle;
