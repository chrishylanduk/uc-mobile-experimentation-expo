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
        <GovukH2 text="Welcome John" key={1} />,
        <HomeBlockList 
          title="Important information"
          content={[
            { text: "You will be paid £345 on Wednesday",
              icon: "coins",
              onPress: () => {
                navigate("SignIn", { screen: "You", params: { screen: "You Page" } });
              }
            },
            { text: "Your next appointment is on Thursday 8th of July",
              icon: "calendar",
              onPress: () => {
                navigate("SignIn", { screen: "To-dos", params: { screen: "Appointments" } });
              }
            }
          ]}
          key={2}
        />,
        <HomeBlockList 
          title="Coming up"
          content={[
            { text: "Complete 'Accept your commitments' to-do by today",
              icon: "list",
              onPress: () => {
                navigate("SignIn", { screen: "To-dos", params: { screen: "Todo Page" } });
              }
            },
            { text: "Work search review on Thursday 8th of July",
              icon: "calendar",
              onPress: () => {
                navigate("SignIn", { screen: "To-dos", params: { screen: "Appointments" } });
              }
            },
            { text: "Report income and expenses by Friday 14th of July",
              icon: "person",
              onPress: () => {
                navigate("SignIn", { screen: "You", params: { screen: "You Page" } });
              }
            }
          ]}
          key={3}
        />,
        <HomeBlock 
          title="About you"
          content={[
            {text: "You live with 5 people", icon: "house-chimney-user"},
            {text: "You have 3 children", icon: "children"},
            {text: "Health conditions reported", icon: "notes-medical"},
          ]
          }
          linkText="See all or update"
          onPress={() => {
            navigate("SignIn", { screen: "You", params: { screen: "You Page" } });
          }}
          key = {4}
        />,
      ]}
    />
  );
};

export default ClaimantHomePage;
