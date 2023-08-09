import React, { type FC } from "react";
import { type ulPropType } from "./types";
import { View } from "react-native";
import GovukText from "../text";
import styles from "./styles";

const UL: FC<ulPropType> = (props) => {
  return (
    <View style={styles.container}>
      {props.content.map((item, i) => {
        return (
          <View style={styles.item} key={i}>
            <GovukText additionalStyle={[styles.bulletPoint]} text="•" key={0}/>
            {item}
          </View>
        )
      })}
    </View>
  );
};

export default UL;
