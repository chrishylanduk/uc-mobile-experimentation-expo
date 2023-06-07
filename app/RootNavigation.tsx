import {CommonActions, createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from "../App";

export const navigationRef = createNavigationContainerRef()

export function navigate(name: keyof RootStackParamList, params?: object) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate(name, params));
    }
}