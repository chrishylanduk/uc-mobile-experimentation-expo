import {
    Text,
  View, StyleSheet
} from "react-native";
import SigninButton from "../../components/govuk/signin_button";
import {Page} from "../../components/page/styles";
import {GovukH1} from "../../components/h1/styles";
import {GovukText} from "../../components/text/styles";
import {GovukH2} from "../../components/h2/styles";
import {GovukInset} from "../../components/inset/styles";
import {GovukButton, GovukButtonText} from "../../components/button/styles";
import {Image} from 'expo-image';

const ClaimantHomePage = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Page>
                <Image
                    source={{
                        uri: 'https://picsum.photos/seed/696/3000/2000'
                    }}
                    style={{ width: '100%', height: '100%'}}
                />
                <GovukH1>Welcome John!</GovukH1>
                <GovukText>32 years old, partner of Jane Doe</GovukText>

                <GovukH2>Payments</GovukH2>
                <GovukInset>
                    <GovukText>Your next payment will be</GovukText>
                    <GovukH2>£1,432</GovukH2>
                </GovukInset>

                <GovukButton>
                    <GovukButtonText>
                        Go to payments
                    </GovukButtonText>
                </GovukButton>
            </Page>
        </View>
    )
}
export default ClaimantHomePage
