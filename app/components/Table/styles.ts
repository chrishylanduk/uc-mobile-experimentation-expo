import {Text, View} from "react-native";
import styled from "styled-components/native";

export const GovukTableHeader = styled(View)`
    padding: 10px 20px 10px 0;
    border-bottom: 1px solid #b1b4b6;
    text-align: left;
    vertical-align: top;
    font-weight: 700;
    display: table-cell;
    font-size: 19px;
    line-height: 1.3157894737;
    color: #0b0c0c;
    width: 100%;
    margin-bottom: 20px;
    border-spacing: 0;
    border-collapse: collapse;
    text-indent: initial;
    background-color: #f3f2f1;
    text-size-adjust: 100%;
`

export const GovukTableCell = styled(View)`
    padding-right: 0;
    padding: 10px 20px 10px 0;
    border-bottom: 1px solid #b1b4b6;
    text-align: left;
    vertical-align: top;
    display: table-cell;
    font-size: 19px;
    line-height: 1.3157894737;
    font-weight: 400;
    width: 100%;
    margin-bottom: 20px;
    border-spacing: 0;
    background-color: #f3f2f1;
    text-size-adjust: 100%;
`