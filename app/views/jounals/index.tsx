import {
    Text,
  View,
} from "react-native";
import {GovukH1} from "../../components/h1/styles";
import {GovukH2} from "../../components/h2/styles";
import {GovukInset} from "../../components/inset/styles";
import {GovukHeader} from "../../components/header/styles";
import {Page} from "../../components/page/styles";
import {GovukH3} from "../../components/h3/styles";
import {GovukWarningBorder, GovukWarningText} from "../../components/warning/styles";
import {GovukText} from "../../components/text/styles";
import {GovukPanel} from "../../components/panel/styles";

const JournalPage = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Page>
                <GovukText>otherpage</GovukText>
                <GovukH1>GovukH1</GovukH1>
                <GovukH2>GovukH2</GovukH2>
                <GovukH3>GovukH3</GovukH3>
                <GovukWarningBorder>
                    <GovukWarningText>warning text</GovukWarningText>
                </GovukWarningBorder>
                <GovukHeader>
                    <GovukText>Header</GovukText>
                </GovukHeader>
                <GovukInset>
                    <GovukText>
                        Inset
                    </GovukText>
                </GovukInset>
                <GovukPanel><Text>Panel</Text></GovukPanel>

            </Page>
        </View>

    )
} 

export default JournalPage
