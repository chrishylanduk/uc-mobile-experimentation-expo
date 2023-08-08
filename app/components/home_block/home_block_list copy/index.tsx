import { type blockListPropType } from "../types";
import { type FC } from "react";
import React from "react";
import { View, Pressable } from "react-native";
import { background, itemStyle } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GovukText from "../../text/text";
import GovukH3 from "../../text/heading/h3";
import LinkText from "../../text/link";
import BlockList from "../../button/block_list";

const HomeBlock: FC<blockListPropType> = (props) => {
  return <View style={background.background}>
    <GovukH3 text={props.title} key={0}/>
    {props.content.map((item, i) => {
      return (
        <BlockList onPress={item.onPress} contents={[
          <View style={itemStyle.itemContainer}>
            <FontAwesomeIcon
              icon={item.icon}
              style={itemStyle.icon}
            />
            <GovukText text={item.text} additionalStyle={[itemStyle.text]} />
            <FontAwesomeIcon
              icon="chevron-circle-right"
              style={itemStyle.icon}
            />
          </View>,
          ]}
        key={i+1}/>
      )
    })}

    {/* {props.linkText !== undefined ? 
      <Pressable
        onPress={props.onPress}
        key={1}
      >
        <LinkText text={props.linkText}/>
      </Pressable>
      : null
    } */}
  </View>;
};

export default HomeBlock;
