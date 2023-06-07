import * as LocalAuthentication from 'expo-local-authentication';
import * as React from 'react';
import { View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList, UserIdContext} from '../../../../App';
import {GovukButton, GovukButtonText} from "../../button/styles";
import {useContext} from "react";


enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignedOut'>;

const SigninButton: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<EResult>();
  const {setUserId } = useContext(UserIdContext);

  const login = () => {
    setUserId("user id")
  };

  const authenticate = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const results = await LocalAuthentication.authenticateAsync();

      if (results.success) {
        setUserId("user id")
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
    authenticate();
  }, []);

    return(
        <View>
          <GovukButton>
                <GovukButtonText
                    onPress={ () => {
                      login();
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
