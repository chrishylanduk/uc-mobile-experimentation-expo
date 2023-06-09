import {
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import {Image} from "expo-image";
import React from "react";

const JournalPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={styles.image}
                    source="https://www.chrishyland.com/host/homeScreenshot.png"
                    contentFit="cover"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#ffffff'
    },
    image: {
        flex: 1,
        width: '90%',
        height: undefined,
        aspectRatio: 1080 / 4596,
        marginTop: 20
    },
});

export default JournalPage
