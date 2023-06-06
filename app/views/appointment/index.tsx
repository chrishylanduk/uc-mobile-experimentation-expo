import {
  View,
} from "react-native";
import {Page} from "../../components/page/styles";
import {GovukText} from "../../components/text/styles";

const AppointmentPage = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Page>
                <GovukText>AppointmentPage</GovukText>
            </Page>
        </View>
    )
} 

export default AppointmentPage
