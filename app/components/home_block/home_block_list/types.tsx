import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export type blockListPropType = {
  title: string;
  content: itemPropType[];
};

export type itemPropType = {
  text: string;
  icon: IconProp;
  onPress: () => void;
};
