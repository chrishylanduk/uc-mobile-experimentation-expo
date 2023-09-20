import Page from "../../../../components/page";
import React, { type ReactElement } from "react";
import GovukH2 from "../../../../components/text/heading/h2";
import HomeBlockList from "../../../../components/home_block/home_block_list";
import { navigate } from "../../../../navigation/RootNavigation";
import HomeBlock from "../../../../components/home_block/home_block";

const ClaimantHomePage = (): ReactElement | null => {
  return (
    <Page
      content={[
        <GovukH2 text="Welcome, John" key={1} />,
        <HomeBlockList
          title="Important information"
          content={[
            {
              text: "You will be paid £345 on Wednesday 16 August",
              icon: "coins",
              onPress: () => {
                navigate("SignIn", {
                  screen: "You",
                  params: { screen: "You Page" },
                });
              },
            },
            {
              text: "Your next appointment is on Friday 22 September at 10am",
              icon: "calendar",
              onPress: () => {
                navigate("SignIn", {
                  screen: "You",
                  params: {
                    screen: "Appointments",
                    params: { screen: "Your Latest Appointment" },
                  },
                });
              },
            },
          ]}
          key={2}
        />,
        <HomeBlockList
          title="Coming up"
          content={[
            {
              text: "Complete 'Accept your commitments' to-do by today",
              icon: "list",
              onPress: () => {
                navigate("SignIn", {
                  screen: "To-dos",
                  params: { screen: "Todo Page" },
                });
              },
            },
            {
              text: "Work search review on Friday 22 September at 10am",
              icon: "calendar",
              onPress: () => {
                navigate("SignIn", {
                  screen: "You",
                  params: {
                    screen: "Appointments",
                    params: { screen: "Your Latest Appointment" },
                  },
                });
              },
            },
            {
              text: "Report income and expenses by Thursday 17 August",
              icon: "person",
              onPress: () => {
                navigate("SignIn", {
                  screen: "You",
                  params: { screen: "You Page" },
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
              screen: "You",
              params: { screen: "You Page" },
            });
          }}
          key={4}
        />,
        <HomeBlockList
          title="Latest jobs from Find a Job"
          content={[
            {
              text: "Retail Assistant at Sainsburys, Clifton BS1 3HF, £15 per hour",
              icon: "carrot",
              onPress: () => {},
            },
            {
              text: "Care Assistant at Care solutions, Pill BS21 5UW, £15 per hour",
              icon: "hand-holding-hand",
              onPress: () => {},
            },
          ]}
          key={5}
        />,
      ]}
    />
  );
};

export default ClaimantHomePage;
