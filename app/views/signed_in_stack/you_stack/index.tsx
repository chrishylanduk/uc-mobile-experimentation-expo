import React, { type ReactElement } from "react";
import Page from "../../../components/page";
import YouBlock from "../../../components/you_block/you_block_list";
import { navigate } from "../../../navigation/RootNavigation";

const YouPage = (): ReactElement => {
  return (
    <Page
      content={[
        <YouBlock
          content={[
            {
              text: "About you",
              onPress: () => {
                navigate("SignIn", {
                  screen: "You",
                  params: {
                    screen: "About You",
                    params: { screen: "About You Page" },
                  },
                });
              },
            },
            {
              text: "Your appointments",
              onPress: () => {
                navigate("SignIn", {
                  screen: "You",
                  params: {
                    screen: "Appointments",
                    params: { screen: "Appointments" },
                  },
                });
              },
            },
            {
              text: "Your payments",
              onPress: () => {},
            },
            {
              text: "Your claim",
              onPress: () => {},
            },
            {
              text: "Work",
              onPress: () => {},
            },
          ]}
          key={2}
        />,
      ]}
    />
  );
};

export default YouPage;
