import { type StyleProp, type TextStyle } from "react-native";

export type linkPropType = {
  text: string;
  colour?: string;
  additionalStyle?: Array<StyleProp<TextStyle>>;
  onPress?: () => void;
};
