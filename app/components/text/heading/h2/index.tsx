import {FC} from "react";
import {Text} from "react-native";
import {textPropType} from "../../types";
import styles from "./styles";
import {commonText} from "../../styles";
import {headerText} from "../styles";

const GovukH2: FC<textPropType> = (props) => {
    return(
        <Text style={[
            commonText.text,
            headerText.header,
            styles.h2,
        ]}>
            {props.text}
        </Text>
    )
}

export default GovukH2
