import { Pressable } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { type buttonPropType } from "./types";
import { type FC } from "react";
import styles from "./styles";
import React from "react";
import GovukText from "../../text/text";
import {
  govuk_colour,
  GOVUK_FOCUS_COLOUR,
  GOVUK_SUCCESS_COLOUR,
} from "../../constants/colours";
import { tr } from "date-fns/locale";

const GovukButton: FC<buttonPropType> = (props) => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const additionalStyles =
    props.additionalStyle != null ? props.additionalStyle : [];

  return (
    <Shadow
      distance={2}
      startColor={props.shadowColour != null ? props.shadowColour : "#002d18"}
      endColor={props.shadowColour != null ? props.shadowColour : "#002d18"}
      sides={{ top: false, start: false, end: false, bottom: true }}
      corners={{
        topStart: false,
        bottomStart: false,
        topEnd: false,
        bottomEnd: false,
      }}
      containerStyle={styles.buttonContainer}
      style={{
        marginBottom: props.bottomMargin != null ? props.bottomMargin : 22,
      }}
      stretch={true}
    >
      <Pressable
        onPress={async () => {
          setDisabled(true); 
          await props.onPress();
          setDisabled(false);
        }}
        disabled={disabled}
        style={({ pressed }) =>
          additionalStyles.concat([
            styles.buttonCommon,
            {
              alignItems: props.left != null ? "baseline" : "center",
              backgroundColor:
                props.backgroundColour != null
                  ? props.backgroundColour
                  : GOVUK_SUCCESS_COLOUR,
              borderColor: pressed || disabled
                ? props.pressedColour != null
                  ? props.pressedColour
                  : GOVUK_FOCUS_COLOUR
                : "rgba(0, 0, 0, 0)",
            },
          ])
        }
        key={0}
      >
        {typeof props.content === "string" ? (
          <GovukText
            text={props.content}
            colour={
              props.textColour != null ? props.textColour : govuk_colour.white
            }
            key={2}
          />
        ) : (
          props.content
        )}
      </Pressable>
    </Shadow>
  );
};

export default GovukButton;
