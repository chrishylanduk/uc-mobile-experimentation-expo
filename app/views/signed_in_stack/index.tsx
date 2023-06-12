import React, {useContext} from "react";
import {PageContext} from "../Context";
import {navigate} from "../../navigation/RootNavigation";
import {StyleSheet, View} from "react-native";

const SignInLoadingSection = () => {
    const {page, setPage} = useContext(PageContext);

    navigate("SignIn", {screen: page.page, params: {screen: page.subpage}})

    if (page.override) {
        setPage({page: "Home", subpage: "Home Page", override: false})
    }

    return(
        <View/>
    );
}

const styles = StyleSheet.create({
    image2: {
        flex: 1,
        width: '90%',
        height: undefined,
        aspectRatio: 1434 / 1804
    },
});

export default SignInLoadingSection
