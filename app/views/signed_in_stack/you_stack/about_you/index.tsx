import React, { ReactElement, useContext, useEffect, useState } from "react";
import Page from "../../../../components/page";
import GovukRows from "../../../../components/table/rows";
import GovukTable from "../../../../components/table/table";
import GovukH2 from "../../../../components/text/heading/h2";
import GovukText from "../../../../components/text/text";
import { UserIdContext } from "../../../Context";
import LinkText from "../../../../components/text/link";
import { navigate } from "../../../../navigation/RootNavigation";

const AboutYou = (): ReactElement => {
  const {userId} = useContext(UserIdContext);
  const [name, setName] = useState<Name>();
  const [loading, setLoading] = useState<boolean>(true);

  const getName = async () => {
    try {
      const response = await fetch('https://uc-mobile-exp-backend-production.up.railway.app/personal/' + userId);
      const accountDetails = await response.json();
      setName(accountDetails)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setInterval(async () => {
      await getName()
    }, 500);
  }, []);

  if (loading) {
    return(<Page content={<GovukH2 text={"Loading..."} key={1} />} />);
  }

  return (
    <Page
      content={[
        <LinkText
          key={-1}
          text={"Back"}
          onPress={() => {
            navigate("SignIn", {
              screen: "You",
              params: {
                screen: "You Page",
              },
            });
          }}
        />,
        <GovukH2 text="About you" key={1}/>,
        <GovukText text="Here's all the information we have about you:"
          additionalStyle={[{marginBottom:20}]}
          key={2}
        />,
        <GovukTable key={6}>
          <GovukRows
            flexArr={[30, 50, 20]}
            data={[[
              <GovukText text="Your name"/>, 
              <GovukText text={name?.givenName + " " + name?.familyName}/>,  
              <LinkText 
                text="Change"
                onPress={ async () =>
                  navigate("SignIn", {
                    screen: "You",
                    params: {
                      screen: "About You",
                      params: { screen: "Update Name" },
                    },
                  })
                }
              />
            ]]}
          key={3}/>
        </GovukTable>
      ]}
    />
  );
};

export default AboutYou;
