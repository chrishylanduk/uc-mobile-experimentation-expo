import { Text, type TextProps } from "./Themed";
import React, { type ReactElement } from "react";

export function MonoText(props: TextProps): ReactElement {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}
