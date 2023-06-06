import { Pressable, Text } from "react-native";
import styled from "styled-components/native";

export const GovukButton = styled(Pressable)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin-bottom: 22px;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 7px;
  padding-left: 10px;
  border-width: 2px;
  border-color: rgba(0,0,0,0);
  border-style: solid;
  border-radius: 0;
  background-color: #00703c;
  vertical-align: top;
`;

export const GovukButtonText = styled(Text)`
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 30px;
`