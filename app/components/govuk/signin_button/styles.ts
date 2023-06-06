import { Pressable, Text } from "react-native";
import styled from "styled-components/native";

export const GovukButton = styled(Pressable)`
  boxSizing: border-box;
  position: relative;
  width: 100%;
  marginTop: 0;
  marginRight: 0;
  marginLeft: 0;
  marginBottom: 22;
  paddingTop: 8;
  paddingRight: 10;
  paddingBottom: 7;
  paddingLeft: 10;
  borderWidth: 2;
  borderColor: rgba(0,0,0,0);
  borderStyle: solid;
  borderTopLeftRadius: 0;
  borderTopRightRadius: 0;
  borderBottomRightRadius: 0;
  borderBottomLeftRadius: 0;
  backgroundColor: #00703c;
  shadowRadius: 0;
  shadowColor: #002d18;
  shadowOpacity: 1;
  verticalAlign: top;
  `;

export const GovukButtonText = styled(Text)`
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 30px;
`