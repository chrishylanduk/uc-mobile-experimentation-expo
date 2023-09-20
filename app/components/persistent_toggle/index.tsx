import React, { useState, type FC, useEffect } from "react";
import { View, Switch } from "react-native";
import BlockList from "../button/block_list";
import { itemStyle } from "../home_block/styles";
import GovukText from "../text/text";
import type { persistentTogglePropType } from "./types";
import { readData, storeData } from "../../utilities/data_storage/data_storage";

const PersistentToggle: FC<persistentTogglePropType> = (props) => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitchValue = async (value: boolean): Promise<void> => {
    setSwitchValue(value);
    await storeData(props.asyncToggleKey, String(value));
    console.log(
      "Toggle set to",
      value,
      "stored",
      await readData(props.asyncToggleKey)
    );
  };

  useEffect(() => {
    void (async () => {
      const result = await readData(props.asyncToggleKey);
      if (result === "true") {
        setSwitchValue(true);
      }
    })();
  }, []);

  return (
    <BlockList
      disabled={true}
      contents={[
        <View style={itemStyle.itemContainer} key={1}>
          <GovukText
            text={props.text}
            additionalStyle={[itemStyle.text]}
            key={1}
          />
          <Switch
            style={itemStyle.icon}
            onValueChange={toggleSwitchValue}
            value={switchValue}
            key={2}
          />
        </View>,
      ]}
      onPress={() => {}}
      key={3}
    />
  );
};

export default PersistentToggle;
