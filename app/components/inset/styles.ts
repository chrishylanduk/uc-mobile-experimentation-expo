import {Text, View} from "react-native";
import styled from "styled-components/native";

export const GovukInset = styled(View)`
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 1.1875rem;
  line-height: 1.3157894737;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  color: #0b0c0c;
  padding: 15px;
  clear: both;
  border-left-width: 10px;
  border-left-style: solid; 
  border-left-color: #b6b1b2;
  display: block;
  background-color: #f3f2f1;
  text-size-adjust: 100%;
  --govuk-frontend-version: "4.6.0";
`