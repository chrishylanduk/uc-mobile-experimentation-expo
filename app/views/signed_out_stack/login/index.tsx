import { useContext } from "react";
import { UserIdContext } from "../../Context";
import * as React from "react";
import authenticate from "../../../utilities/login/authenticate";
import login from "../../../utilities/login/login";
import GovukButton from "../../../components/button";
import Page from "../../../components/page";

const LoginPage = () => {
  const { setUserId } = useContext(UserIdContext);

  React.useEffect(() => {
    authenticate(setUserId).catch();
  }, []);

  return (
    <Page
      content={<GovukButton text="Sign in" onPress={() => login(setUserId)} />}
    />
  );
};

export default LoginPage;
