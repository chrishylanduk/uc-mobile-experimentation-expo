import { View, StyleSheet, Animated, Image } from "react-native";
import ScrollView = Animated.ScrollView;
import GovukButton from "../../../../components/button";
import {navigate} from "../../../../navigation/RootNavigation";

const ClaimantHomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{width: '80%'}}>

              {/*<Image*/}
            {/*  style={styles.image}*/}
            {/*  source={require("../../../../../assets/images/homeScreenshot.png")}*/}
            {/*/>*/}
              <GovukButton
                  text='test'
                  onPress={() =>
                      navigate("SignIn", {screen: "Todo", params: {screen: "Home"}})
                  }
              />
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    width: "90%",
    height: undefined,
    aspectRatio: 1080 / 4596,
    marginTop: 20,
  },
});
export default ClaimantHomePage;
