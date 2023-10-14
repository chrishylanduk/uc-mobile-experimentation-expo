import { Image } from "react-native";
import React from "react";
import { type ReactElement } from "react";

function LogoTitle(): ReactElement {
  return (
    <Image
      style={{ width: 120, height: 45 }}
      source={require("../../../assets/images/fullLogo.png")}
    />
  );
}

export default LogoTitle;
