import {
    Animated,
    StyleSheet,
    Text,
    View,
} from "react-native";
import SigninButton from "../../components/govuk/signin_button";
import {Image} from "expo-image";
import ScrollView = Animated.ScrollView;

const TodoPage = () => {
    return (<ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={styles.image}
                    source="https://www.chrishyland.com/host/toDoScreenshot.png"
                    contentFit="cover"
                />
            </View>
        </ScrollView>
    )
}

export default TodoPage

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#ffffff'
    },
    image: {
        flex: 1,
        width: '90%',
        height: undefined,
        aspectRatio: 1080 / 2061,
        marginTop: 20
    },
});
