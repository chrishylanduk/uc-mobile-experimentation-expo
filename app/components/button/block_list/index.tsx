import React, { type FC } from "react";
import { govuk_colour, GOVUK_LINK_COLOUR } from "../../constants/colours";
import GovukButton from "../default";
import { type nonDefaultPropType } from "../types";

const BlockList: FC<nonDefaultPropType> = (props) => {
  return (
    <GovukButton
      content={props.contents}
      onPress={props.onPress}
      backgroundColour={govuk_colour.light_grey}
      shadowColour={govuk_colour.mid_grey}
      textColour={GOVUK_LINK_COLOUR}
      left={true}
      bottomMargin={10}
    />
  );
};

export default BlockList;
