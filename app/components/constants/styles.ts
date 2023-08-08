// Text
import {Dimensions} from 'react-native';
let percentage = Dimensions.get('window').width < 400 ? 0.8 : 1;

export const GOVUK_BOLD = "700";
export const GOVUK_WEIGHT = "400";
export const GOVUK_FONT_SIZE_XS = 16*percentage;
export const GOVUK_FONT_SIZE_S = 19*percentage;
export const GOVUK_FONT_SIZE_M = 24*percentage;
export const GOVUK_FONT_SIZE_L = 36*percentage;
export const GOVUK_FONT_SIZE_XL = 48*percentage;
