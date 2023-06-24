import { StyleProp, TextStyle } from "react-native";

export type textPropType = {
  text: string;
  colour?: string;
  additionalStyle?: StyleProp<TextStyle>[];
};
