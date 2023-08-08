import { type ReactElement, useContext } from "react";
import { UserIdContext } from "../../Context";
import * as React from "react";
import authenticate from "../../../utilities/login/authenticate";
import login from "../../../utilities/login/login";
import GovukButton from "../../../components/button/default";
import Page from "../../../components/page";

const LoginPage = (): ReactElement => {
  const { setUserId } = useContext(UserIdContext);

  React.useEffect(() => {
    void authenticate(setUserId).catch();
  }, []);

  return (
    <Page
      content={
        <GovukButton
          content="Sign in"
          onPress={() => {
            login(setUserId);
          }}
        />
      }
    />
  );
};

export default LoginPage;
