import { Text } from "react-native";
import styled from "styled-components/native";

export const GovukInset = styled(Text)`
@media (min-width: 40.0625em)
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 1.1875rem;
    line-height: 1.3157894737;
    font-family: "GDS Transport",arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    color: #0b0c0c;
    padding: 15px;
    clear: both;
    border-left: 10px solid #b1b4b6;
    display: block;
    background-color: #f3f2f1;
    text-size-adjust: 100%;
    --govuk-frontend-version: "4.6.0";
`