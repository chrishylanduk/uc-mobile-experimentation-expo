import { type blockListPropType } from "./types";
import { type FC } from "react";
import React from "react";
import { View } from "react-native";
import { background, itemStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GovukText from "../../text/text";
import BlockList from "../../button/block_list";

const YouBlockList: FC<blockListPropType> = (props) => {
  return (
    <View style={background.background}>
      {props.content.map((item, i) => {
        return (
          <BlockList
            onPress={item.onPress}
            contents={[
              <View style={itemStyle.itemContainer} key={1}>
                <GovukText
                  text={item.text}
                  additionalStyle={[itemStyle.text]}
                  key={2}
                />
                <FontAwesomeIcon
                  icon="chevron-right"
                  style={itemStyle.chevron}
                  key={3}
                />
              </View>,
            ]}
            key={i + 1}
          />
        );
      })}
    </View>
  );
};

export default YouBlockList;
