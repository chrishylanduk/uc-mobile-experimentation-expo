import { type backgroundPropType } from "./types";
import { type FC } from "react";
import React from "react";
import { View, Pressable } from "react-native";
import { background, itemStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GovukText from "../text/text";
import GovukH3 from "../text/heading/h3";
import LinkText from "../text/link";

const HomeBlock: FC<backgroundPropType> = (props) => {
  return <View style={background.background}>
    <GovukH3 text={props.title}/>
    {props.content.map((item) => {
      return (
        <Pressable style={itemStyle.itemContainer } onPress={item.onPress}>
          <FontAwesomeIcon
            icon={item.icon}
            style={itemStyle.icon}
          />
          <GovukText text={item.text} additionalStyle={[itemStyle.text]} />
          {item.onPress !== undefined ? 
            <FontAwesomeIcon
              icon="chevron-circle-right"
              style={itemStyle.icon}
            />
            : null
          }
        </Pressable>
      )
    })}

    {props.linkText !== undefined ? 
      <Pressable
        onPress={props.onPress}
      >
        <LinkText text={props.linkText}/>
      </Pressable>
      : null
    }
  </View>;
};

export default HomeBlock;
