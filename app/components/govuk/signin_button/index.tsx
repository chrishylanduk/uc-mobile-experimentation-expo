import * as LocalAuthentication from 'expo-local-authentication';
import * as React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import {GovukButton, GovukButtonText} from "../../button/styles";


enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignedOut'>;

const SigninButton: React.FC = () => {
    const navigation = useNavigation<homeScreenProp>();



  const [facialRecognitionAvailable, setFacialRecognitionAvailable] = React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<EResult>();

  const login = () => {  
    navigation.navigate('SignIn')
  };

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION));
      setFingerprintAvailable(types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT));
      setIrisAvailable(types.includes(LocalAuthentication.AuthenticationType.IRIS));
    }
  };

  const authenticate = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const results = await LocalAuthentication.authenticateAsync({promptMessage: description});

      if (results.success) {
        // route.params.setUsertoken = 'token'
        navigation.navigate('SignIn')
        setResult(EResult.SUCCESS);
      } else if (results.error === 'unknown') {
        setResult(EResult.DISABLED);
      } else if (
        results.error === 'user_cancel' ||
        results.error === 'system_cancel' ||
        results.error === 'app_cancel'
      ) {
        setResult(EResult.CANCELLED);
      }
    } catch (error) {
      setResult(EResult.ERROR);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    checkSupportedAuthentication();
  }, []);

  let resultMessage;
  switch (result) {
    case EResult.CANCELLED:
      resultMessage = 'Authentication process has been cancelled';
      break;
    case EResult.DISABLED:
      resultMessage = 'Biometric authentication has been disabled';
      break;
    case EResult.ERROR:
      resultMessage = 'There was an error in authentication';
      break;
    case EResult.SUCCESS:
      resultMessage = 'Successfully authenticated';
      break;
    default:
      resultMessage = '';
      break;
  }

  let description : string;
  if (facialRecognitionAvailable && fingerprintAvailable && irisAvailable) {
    description = 'Log in with face, fingerprint or iris';
  } else if (facialRecognitionAvailable && fingerprintAvailable) {
    description = 'Log in with face or fingerprint';
  } else if (facialRecognitionAvailable && irisAvailable) {
    description = 'Log in with face or iris';
  } else if (fingerprintAvailable && irisAvailable) {
    description = 'Log in with fingerprint or iris';
  } else if (facialRecognitionAvailable) {
    description = 'Log in with face';
  } else if (fingerprintAvailable) {
    description = 'Log in with fingerprint ';
  } else if (irisAvailable) {
    description = 'Log in with iris';
  } else {
    description = 'No biometric authentication methods available';
  }

        
  



    return(
        <View>
          <GovukButton>
                <GovukButtonText
                    onPress={ () => {
                      if ((facialRecognitionAvailable || fingerprintAvailable || irisAvailable) && result == null) {
                        authenticate();
                      } else {
                        login();
                      }
                      
                    }
                    }
                    >
                    Sign in
                </GovukButtonText>
            </GovukButton>
        </View>
        
    );
};

export default SigninButton;
