import React, { type ReactElement, useContext, useEffect } from "react";
import { PageContext } from "../Context";
import { navigate } from "../../navigation/RootNavigation";
import { View } from "react-native";

const SignInLoadingSection = (): ReactElement => {
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    navigate("SignIn", { screen: page.page, params: { screen: page.subpage } });
    if (page.override) {
      setPage({ page: "Home", subpage: "Home Page", override: false });
    }
  });

  return <View />;
};

export default SignInLoadingSection;
