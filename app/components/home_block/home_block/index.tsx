import { type blockListPropType } from "./types";
import { type FC } from "react";
import React from "react";
import { View } from "react-native";
import { background, itemStyle } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GovukText from "../../text/text";
import GovukH3 from "../../text/heading/h3";
import LinkText from "../../text/link";
import BlockList from "../../button/block_list";

const HomeBlock: FC<blockListPropType> = (props) => {
  return <View style={background.background}>
    <GovukH3 text={props.title} key={0}/>
    <BlockList 
      onPress={props.onPress} 
      contents={props.content.map((item, i) => {
        return (
          <View style={itemStyle.itemContainer} key={i}>
            <FontAwesomeIcon
              icon={item.icon}
              style={itemStyle.icon}
              key={1}
            />
            <GovukText text={item.text} additionalStyle={[itemStyle.text]} key={2}/>
          </View>
        )}).concat(<LinkText text={props.linkText} additionalStyle={[{marginTop: 10}]} key={3}/>)
      }
      key={1}
    />
  </View>;
};

export default HomeBlock;
