import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export type backgroundPropType = {
  title: string;
  content: itemPropType[];
  onPress?: () => void;
  linkText?: string;
};

export type itemPropType = {
  text: string;
  icon: IconProp;
  colour?: string;
  onPress?: () => void;
};
