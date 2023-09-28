import { StyleProp, TextStyle } from "react-native";

export type nonDefaultTextPropType = {
  text: string;
  additionalStyle?: Array<StyleProp<TextStyle>>;
};
