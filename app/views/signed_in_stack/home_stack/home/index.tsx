import Page from "../../../../components/page";
import React, { useState, type ReactElement, useContext, useEffect } from "react";
import GovukH2 from "../../../../components/text/heading/h2";
import HomeBlockList from "../../../../components/home_block/home_block_list";
import { navigate } from "../../../../navigation/RootNavigation";
import HomeBlock from "../../../../components/home_block/home_block";
import { View } from "react-native";
import { readData } from "../../../../utilities/data_storage/data_storage";
import { UserIdContext } from "../../../Context";

const ClaimantHomePage = (): ReactElement | null => {
  const [findAJob, hasFindAJob] = useState<boolean>(true);
  const {userId} = useContext(UserIdContext);
  const [givenName, setGivenName] = useState('');

  const getGivenName = async () => {
    try {
      const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/personal/' + userId);
      const accountDetails = await response.json();
      setGivenName(accountDetails.givenName)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getGivenName();
  }, []);

  useEffect(() => {
    setInterval(async () => {
      const result = await readData("homeViewFindAJob");
      hasFindAJob(result === "true");
    }, 500);
  }, []);

  if (givenName == '') {
    return(<Page content={<GovukH2 text={"Loading..."} key={1} />} />);
  }

  return (
    <Page
      content={[
        <GovukH2 text={"Welcome, " + givenName} key={1} />,
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
        <View key = {5}>
          {findAJob ? 
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
          key={0}
        /> : null}
        </View>,
      ]}
    />
  );
};

export default ClaimantHomePage;
