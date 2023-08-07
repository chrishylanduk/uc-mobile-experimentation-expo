import Page from "../../../../components/page";
import React, { type ReactElement } from "react";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukH3 from "../../../../components/text/heading/h3";
import Inset from "../../../../components/inset";
import GovukText from "../../../../components/text/text";

const ClaimantHomePage = (): ReactElement | null => {
  return (
    <Page
      content={[
        <GovukH2 text="Welcome John" key={1} />,
        <GovukH3 text="You will be paid £345 on Wednesday" key={2} />,
        <GovukH3 text="Your next appointment" key={3} />,
        <Inset
          content={[
            <GovukText text={"You must attend on"} key={1} />,
            <GovukH3 text="Thursday 8 Setepmber 2023 at 3:00pm" key={2} />,
            <GovukText
              text={"Your appointment is with:"}
              key={3}
              additionalStyle={[{ fontWeight: "700" }]}
            />,
            <GovukText
              text={"Sarah Jones"}
              key={4}
              additionalStyle={[{ fontWeight: "700" }]}
            />,
            <GovukText
              text={"Location:"}
              key={5}
              additionalStyle={[{ fontWeight: "700" }]}
            />,
            <GovukText
              text={"Sutton Jobcentre Plus"}
              key={6}
              additionalStyle={[{ fontWeight: "700" }]}
            />,
          ]}
          key={4}
        />,
      ]}
    />
  );
};

export default ClaimantHomePage;
