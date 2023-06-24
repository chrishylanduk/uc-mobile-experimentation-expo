import { StyleProp, TextStyle } from "react-native";

export type buttonPropType = {
  text: string;
  onPress: () => void;
  backgroundColour?: string;
  shadowColour?: string;
  pressedColour?: string;
  textColour?: string;
  left?: boolean;
  additionalStyle?: StyleProp<TextStyle>[];
};
