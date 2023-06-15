import { ScrollView, StyleSheet, View, Image } from "react-native";

const AppointmentPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/appointmentScreenshot.jpg")}
        />
        {/*<Page>*/}
        {/*    <GovukH1>Welcome John!</GovukH1>*/}
        {/*    <GovukText>32 years old, partner of Jane Doe</GovukText>*/}

        {/*    <GovukH2>Payments</GovukH2>*/}
        {/*    <GovukInset>*/}
        {/*        <GovukText>Your next payment will be</GovukText>*/}
        {/*        <GovukH2>£1,432</GovukH2>*/}
        {/*    </GovukInset>*/}

        {/*    <GovukButton>*/}
        {/*        <GovukButtonText>*/}
        {/*            Go to payments*/}
        {/*        </GovukButtonText>*/}
        {/*    </GovukButton>*/}
        {/*</Page>*/}
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
    aspectRatio: 1170 / 3207,
    marginTop: 20,
  },
});

export default AppointmentPage;
