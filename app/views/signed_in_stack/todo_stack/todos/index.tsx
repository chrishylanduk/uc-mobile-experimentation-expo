import { type ReactElement } from "react";
import React from "react";
import Page from "../../../../components/page";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukText from "../../../../components/text/text";

const TodoPage = (): ReactElement => {
  return <Page content={[
    <GovukH2 text="To-do list" key={1} />,
    <GovukText text="No outstanding to-dos" key={2}/>
  ]} />;
};

export default TodoPage;
