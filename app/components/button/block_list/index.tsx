import React, { FC } from "react";
import { govuk_colour, govuk_link_colour } from "../../constants/colours";
import GovukButton from "../default";
import { nonDefaultPropType } from "../types";

const BlockList: FC<nonDefaultPropType> = (props) => {
  return (
    <GovukButton
      text={props.text}
      onPress={props.onPress}
      backgroundColour={govuk_colour.light_grey}
      shadowColour={govuk_colour.mid_grey}
      textColour={govuk_link_colour}
      left={true}
    />
  );
};

export default BlockList;
