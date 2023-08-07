import React, { type ReactElement } from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";

const OffersPage = (): ReactElement => {
  return <Page content={[<GovukH2 text="Offers" key={1} />]} />;
};

export default OffersPage;
