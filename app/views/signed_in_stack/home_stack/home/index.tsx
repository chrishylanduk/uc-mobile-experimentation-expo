import Page from "../../../../components/page";
import React, { type ReactElement } from "react";
import GovukH2 from "../../../../components/text/heading/h2";
import HomeBlock from "../../../../components/home_block";
import { navigate } from "../../../../navigation/RootNavigation";

const ClaimantHomePage = (): ReactElement | null => {
  return (
    <Page
      content={[
        <GovukH2 text="Welcome, John" key={1} />,
        <HomeBlock
          title="Important information"
          content={[
            {
              text: "You will be paid £345 on Wednesday",
              icon: "coins",
              onPress: () => {
                navigate("SignIn", {
                  screen: "To-dos",
                  params: { screen: "Home" },
                });
              },
            },
            {
              text: "Your next appointment is on Thursday 8 July at 2:30pm",
              icon: "calendar",
              onPress: () => {
                navigate("SignIn", {
                  screen: "To-dos",
                  params: { screen: "Home" },
                });
              },
            },
          ]}
          key={2}
        />,
        <HomeBlock
          title="Coming up"
          content={[
            {
              text: "Complete 'Accept your commitments' to-do by today",
              icon: "list",
              onPress: () => {
                navigate("SignIn", {
                  screen: "To-dos",
                  params: { screen: "Home" },
                });
              },
            },
            {
              text: "Work search review on Thursday 8 July at 2:30pm",
              icon: "calendar",
              onPress: () => {
                navigate("SignIn", {
                  screen: "To-dos",
                  params: { screen: "Home" },
                });
              },
            },
            {
              text: "Report income and expenses by Friday 14 July",
              icon: "person",
              onPress: () => {
                navigate("SignIn", {
                  screen: "To-dos",
                  params: { screen: "Home" },
                });
              },
            },
          ]}
          key={3}
        />,
        <HomeBlock
          title="About you"
          content={[
            { text: "You live with 5 people", icon: "house-chimney-user" },
            { text: "You have 3 children", icon: "children" },
            { text: "Health conditions reported", icon: "notes-medical" },
          ]}
          linkText="See all or update"
          onPress={() => {
            navigate("SignIn", {
              screen: "To-dos",
              params: { screen: "Home" },
            });
          }}
          key={4}
        />,
      ]}
    />
  );
};

export default ClaimantHomePage;
