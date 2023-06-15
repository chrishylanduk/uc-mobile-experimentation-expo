import { Animated, StyleSheet, View, Image } from "react-native";
import ScrollView = Animated.ScrollView;

const TodoPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/toDoScreenshot.png")}
        />
      </View>
    </ScrollView>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    width: "90%",
    height: undefined,
    aspectRatio: 1080 / 2061,
    marginTop: 20,
  },
});
