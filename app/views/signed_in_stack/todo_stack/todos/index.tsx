import { type ReactElement } from "react";
import React from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";

const TodoPage = (): ReactElement => {
  return <Page content={[<GovukH2 text="To-do list" key={1} />]} />;
};

export default TodoPage;
