import { Pressable, Text, View } from "react-native";
import styled from "styled-components/native";

export const GovukHeader = styled(View)`
position: relative;
  margin-bottom: -10px;
  padding-top: 10px;
  border-bottom: 10px solid #1d70b8;
  margin-right: max(30px, calc(15px + env(safe-area-inset-right)));
  margin-left: max(30px, calc(15px + env(safe-area-inset-left)));
  margin-right: 30px;
  margin-left: 30px;
  margin-right: max(15px, calc(15px + env(safe-area-inset-right)));
  margin-left: max(15px, calc(15px + env(safe-area-inset-left)));
  max-width: 960px;
  margin-right: 15px;
  margin-left: 15px;
  display: block;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 14px;
  font-size: .875rem;
  line-height: 1.1428571429;
  border-bottom: 10px solid #fff;
  color: #fff;
  background: #0b0c0c;
  background-color: #f3f2f1;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  --govuk-frontend-version: "4.6.0";

.govuk-header__container:after {
    content: "";
    display: block;
    clear: both;
`