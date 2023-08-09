import { type ReactElement } from "react";
import React from "react";

import Page from "../../../../../components/page";
import LinkText from "../../../../../components/text/link";
import { navigate } from "../../../../../navigation/RootNavigation";
import GovukH3 from "../../../../../components/text/heading/h3";
import GovukText from "../../../../../components/text/text";

const AnAppointmentPage = (): ReactElement => {
  return (
    <Page
      content={[
        <LinkText
          key={0}
          text={"Back"}
          onPress={() => {
            navigate("SignIn", {
              screen: "You",
              params: {
                screen: "Appointments",
                params: { screen: "Appointments" },
              },
            });
          }}
        ></LinkText>,
        <GovukText text={"You must attend on"} key={1} />,
        <GovukH3 text="Friday 11 August 2023 at 10am" key={2} />,
        <GovukText
          text={"Your appointment is with:"}
          key={3}
          additionalStyle={[{ fontWeight: "700" }]}
        />,
        <GovukText
          text={"George Smith"}
          key={4}
          additionalStyle={[{ fontWeight: "700" }]}
        />,
        <GovukText
          text={"Location:"}
          key={5}
          additionalStyle={[{ fontWeight: "700" }]}
        />,
        <GovukText
          text={"Pudsey Jobcentre Plus"}
          key={6}
          additionalStyle={[{ fontWeight: "700" }]}
        />,
      ]}
    />
  );
};

export default AnAppointmentPage;
