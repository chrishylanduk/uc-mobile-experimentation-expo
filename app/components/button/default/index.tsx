import { Pressable } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { type buttonPropType } from "./types";
import { type FC } from "react";
import styles from "./styles";
import React from "react";
import GovukText from "../../text/text";
import {
  govuk_colour,
  govuk_focus_colour,
  govuk_success_colour,
} from "../../constants/colours";

const GovukButton: FC<buttonPropType> = (props) => {
  let additionalStyles = props.additionalStyle ? props.additionalStyle : [];

  return (
    <Shadow
      distance={2}
      startColor={props.shadowColour ? props.shadowColour : "#002d18"}
      endColor={props.shadowColour ? props.shadowColour : "#002d18"}
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
        style={({ pressed }) =>
          additionalStyles.concat([
            styles.buttonCommon,
            {
              alignItems: props.left ? "baseline" : "center",
              backgroundColor: props.backgroundColour
                ? props.backgroundColour
                : govuk_success_colour,
              borderColor: pressed
                ? props.pressedColour
                  ? props.pressedColour
                  : govuk_focus_colour
                : "rgba(0, 0, 0, 0)",
            },
          ])
        }
      >
        <GovukText
          text={props.text}
          colour={props.textColour ? props.textColour : govuk_colour.white}
        />
      </Pressable>
    </Shadow>
  );
};

export default GovukButton;
