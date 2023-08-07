import { ScrollView, StyleSheet, View, Image } from "react-native";
import { type ReactElement } from "react";
import React from "react";

const AppointmentPage = (): ReactElement => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/appointmentScreenshot.jpg")}
        />
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
