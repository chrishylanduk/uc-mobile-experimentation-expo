import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukText from "../../../../components/text/text";
import GovukH3 from "../../../../components/text/heading/h3";
import { Image } from "react-native";

const CertificatePage = (): ReactElement => {
  return (
    <Page
      content={[
        <GovukH2 text="Your certificate" key={1} />,
        <GovukText
          key={2}
          text={
            "You may be asked for your Universal Credit digital certificate to prove you can receive some offers and other support"
          }
        ></GovukText>,
        <GovukH3 text="John Smith is on Universal Credit" key={3} />,
        <Image
          key={4}
          style={{ width: 350, height: 350 }}
          source={require("../../../../../assets/images/QRExample.png")}
        />,
        <GovukH3 text="Proof code: YTT-233-ASI-932" key={3} />,
        <GovukText
          key={5}
          text={"This certificate expires: 29 October 2023"}
        ></GovukText>,
      ]}
    />
  );
};

export default CertificatePage;
