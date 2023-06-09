import {
  View,
} from "react-native";
import SigninButton from "../../../components/govuk/signin_button";



const LoginPage = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SigninButton
            />
        </View>
    )
} 

export default LoginPage
