import { Pressable, Text } from "react-native";
import styled from "styled-components/native";

export const GovukHeader = styled(Pressable)`
  border-bottom: 10px solid #1d70b8;
  @media (min-width: 40.0625em)
  font-size: 1rem;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  color: #fff;
  background: #0b0c0c;
  display: block;
  background-color: #f3f2f1;
  text-size-adjust: 100%;
  --govuk-frontend-version: "4.6.0";
`