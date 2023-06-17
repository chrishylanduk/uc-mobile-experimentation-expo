import {FC} from "react";
import {ScrollView, View} from "react-native";
import * as React from "react";
import {pagePropType} from "./types";
import styles from "./styles";

const Page: FC<pagePropType> = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: '80%'}}>
                    {props.content}
                </View>
            </View>
        </ScrollView>
    )
}

export default Page
