import {
    Animated, Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
import {PushNotificationTokenContext} from "../../../../../App";
import {Image} from "expo-image";
import ScrollView = Animated.ScrollView;

const SettingsPage = () => {
    const token = React.useContext(PushNotificationTokenContext);
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={styles.image}
                    source="https://www.chrishyland.com/host/settingsScreenshot.png"
                    contentFit="contain"
                />
                <Pressable style={{height: 800}}></Pressable>
                <Text selectable={true}>{token}</Text>
            </View>
        </ScrollView>
    )
} 

export default SettingsPage

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#ffffff'
    },
    image: {
        flex: 1,
        width: '90%',
        height: undefined,
        aspectRatio: 1434 / 1804
    },
});
