import { Pressable, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { buttonPropType } from "./types";
import { FC } from "react";
import styles from "./styles";

const GovukButton: FC<buttonPropType> = (props) => {
  return (
    <Shadow
      distance={2}
      startColor={"#002d18"}
      endColor={"#002d18"}
      sides={{ top: false, start: false, end: false, bottom: true }}
      corners={{
        topStart: false,
        bottomStart: false,
        topEnd: false,
        bottomEnd: false,
      }}
      containerStyle={styles.buttonContainer}
      stretch={true}
    >
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => [
          styles.buttonCommon,
          pressed ? styles.pressedDown : styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </Shadow>
  );
};

export default GovukButton;
