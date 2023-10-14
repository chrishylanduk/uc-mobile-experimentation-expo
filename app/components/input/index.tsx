import { useState, type FC } from "react";
import React from "react";
import { TextInput, View , type TextInputProps } from "react-native";

import styles from "./styles";
import { GOVUK_FOCUS_COLOUR, GOVUK_INPUT_BORDER_COLOUR } from "../constants/colours";
import { commonText } from "../text/styles";

const GovukInput: FC<TextInputProps> = (props) => {
  const [focussed, setFocussed] = useState(false);

  return (
    <View 
      style={
        [styles.border,
          {borderColor: focussed ? GOVUK_FOCUS_COLOUR : GOVUK_INPUT_BORDER_COLOUR,}
        ]}>
      <TextInput 
        style={[styles.input,
          commonText.text,
          commonText.commonText,
          {minHeight: props.multiline? 100 : 25}
        ]}
        onChangeText={props.onChangeText}
        autoComplete={props.autoComplete}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        multiline={props.multiline}
        
        onFocus={() => { setFocussed(true); }}
        onBlur={() => { setFocussed(false); }}
      />
    </View>
  )
};

export default GovukInput;
