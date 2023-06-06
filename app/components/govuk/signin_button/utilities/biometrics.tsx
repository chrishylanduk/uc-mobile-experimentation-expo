// import { 
//     hasHardwareAsync,
//     isEnrolledAsync,
//     authenticateAsync ,
//     supportedAuthenticationTypesAsync
//  } from 'expo-local-authentication';

//  export const biometricsAuth = async () => {
//      const compatible = await hasHardwareAsync()
//      if (!compatible) throw 'This device is not compatible for biometric authentication'
//      const enrolled = await isEnrolledAsync()
//      if (!enrolled) throw "This device doesn't have biometric authentication enabled"
//      const result = await authenticateAsync({
//         promptMessage: "Log in with fingerprint, face or iris",
//       });
//      if (!result.success) throw `${result.error} - Authentication unsuccessful`

//      return
//  }

//  export const checkSupportedAuthentication = async () => {
//     const types = await supportedAuthenticationTypesAsync();
//     if (types && types.length) {
//         SigninButton.setFacialRecognitionAvailable(types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION));
//         setFingerprintAvailable(types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT));
//         setIrisAvailable(types.includes(LocalAuthentication.AuthenticationType.IRIS));
//     }
//   };
