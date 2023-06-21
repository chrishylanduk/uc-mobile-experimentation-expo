import { ScrollView, StyleSheet, View, Image } from "react-native";
import React, { type ReactElement } from "react";

const JournalPage = (): ReactElement => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/homeScreenshot.png")}
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
    aspectRatio: 1080 / 4596,
    marginTop: 20,
  },
});

export default JournalPage;
