import { type StyleProp, type TextStyle } from "react-native";

export type buttonPropType = {
  text: string;
  onPress: () => void;
  backgroundColour?: string;
  shadowColour?: string;
  pressedColour?: string;
  textColour?: string;
  left?: boolean;
  additionalStyle?: Array<StyleProp<TextStyle>>;
};
