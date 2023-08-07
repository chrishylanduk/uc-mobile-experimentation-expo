import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";

const YouPage = (): ReactElement => {
  return <Page content={[<GovukH2 text="You" key={1} />]} />;
};

export default YouPage;
