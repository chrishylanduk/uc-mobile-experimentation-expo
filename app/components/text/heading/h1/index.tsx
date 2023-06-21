import {FC} from "react";
import {Text} from "react-native";
import styles from "./styles";
import {textPropType} from "../../types";
import {commonText} from "../../styles";
import {headerText} from "../styles";

const GovukH1: FC<textPropType> = (props) => {
    return(
        <Text style={[
            commonText.text,
            headerText.header,
            styles.h1,
        ]}>
            {props.text}
        </Text>
    )
}

export default GovukH1
