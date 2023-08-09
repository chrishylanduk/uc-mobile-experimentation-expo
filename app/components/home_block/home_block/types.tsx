import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export type blockListPropType = {
  title: string;
  content: itemPropType[];
  linkText: string;
  onPress: () => void;
};

export type itemPropType = {
  text: string;
  icon: IconProp;
};
