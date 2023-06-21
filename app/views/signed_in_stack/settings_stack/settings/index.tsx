import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import ScrollView = Animated.ScrollView;

const SettingsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/settingsScreenshot.png")}
        />
        <Pressable style={{ height: 800 }}></Pressable>
      </View>
    </ScrollView>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    width: "90%",
    height: undefined,
    aspectRatio: 1434 / 1804,
  },
});
