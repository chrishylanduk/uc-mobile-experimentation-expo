import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Image} from "expo-image";
import {UserIdContext} from "../../../../App";

const SplashPage = () => {
    const {userId } = useContext(UserIdContext);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={styles.image}
                source={require('../../../../assets/images/splash.png')}
                contentFit="contain">
            </Image>
            <Text>
                here:{userId}
            </Text>
        </View>
    )
}

export default SplashPage

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
