import {Pressable, StyleSheet, Text} from "react-native";
import * as React from "react";
import {Shadow} from 'react-native-shadow-2';

type buttonPropType = {
    text: String,
    onPress: () => void,
}

const GovukButton: React.FC<buttonPropType> = (props) => {
    return(
        <Shadow
            distance={2}
            startColor={'#002d18'}
            endColor={'#002d18'}
            sides={{top:false, start:false, end:false,bottom:true}}
            corners={{topStart:false, bottomStart: false, topEnd: false, bottomEnd: false}}
            containerStyle={styles.buttonContainer}
            stretch={true}
        >
            <Pressable
                onPress = {props.onPress}
                style={({pressed}) => [
                    styles.buttonCommon,
                    pressed ?
                        styles.pressedDown
                            :
                        styles.wrapperCustom,
                ]}
            >
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </Pressable>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: 'white',
    },
    buttonContainer: {
        marginBottom: 22,
        alignItems: 'center',
        maxWidth: '100%',
    },
    buttonCommon:{
        position: 'relative',
        paddingTop: 8,
        paddingRight: 10,
        paddingBottom: 7,
        paddingLeft: 10,
        borderRadius: 0,
        borderWidth: 3,
        borderStyle: 'solid',
        backgroundColor: '#00703c',
        alignItems: 'center',
    },
    wrapperCustom: {
        borderColor: 'rgba(0, 0, 0, 0)',
    },
    pressedDown: {
        borderColor: '#fd0',
    }
});

// line-height: 1.1875;
// border-radius: 0;



export default GovukButton;