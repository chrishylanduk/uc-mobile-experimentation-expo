import {
    Text,
  View,
} from "react-native";
import Page from "../../components/page/Page";
import {GovukH1} from "../../components/h1/styles";
import {GovukH2} from "../../components/h2/styles";
import {GovukInset} from "../../components/inset/styles";
import {GovukHeader} from "../../components/header/styles";

const JournalPage = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>otherpage</Text>
            <Page/>
            <GovukH1>GovukH1</GovukH1>
            <GovukH2>GovukH2</GovukH2>
            <GovukHeader>
                <Text>Header</Text>
            </GovukHeader>
            <GovukInset>
                <Text>
                    Inset
                </Text>
            </GovukInset>
        </View>

    )
} 

export default JournalPage
