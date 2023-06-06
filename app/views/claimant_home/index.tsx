import {
    Text,
    View, StyleSheet, Animated
} from "react-native";
import SigninButton from "../../components/govuk/signin_button";
import {Page} from "../../components/page/styles";
import {GovukH1} from "../../components/h1/styles";
import {GovukText} from "../../components/text/styles";
import {GovukH2} from "../../components/h2/styles";
import {GovukInset} from "../../components/inset/styles";
import {GovukButton, GovukButtonText} from "../../components/button/styles";
import {Image} from 'expo-image';
import ScrollView = Animated.ScrollView;

const ClaimantHomePage = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={styles.image}
                source="https://www.chrishyland.com/host/homeScreenshot.png"
                contentFit="cover"
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
export default ClaimantHomePage
