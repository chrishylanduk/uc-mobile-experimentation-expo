export type blockListPropType = {
  content: itemPropType[];
};

export type itemPropType = {
  text: string;
  onPress: () => void;
};
