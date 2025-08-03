import { StyleSheet } from 'react-native';
import { fonts, fontSizes } from './fonts';

export const globalStyles = StyleSheet.create({
  // Typography
  textRegular: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.base,
  },
  textMedium: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.base,
  },
  textSemiBold: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.base,
  },
  textBold: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.base,
  },
  
  // Heading styles
  heading1: {
    fontFamily: fonts.bold,
    fontSize: fontSizes['5xl'],
  },
  heading2: {
    fontFamily: fonts.bold,
    fontSize: fontSizes['4xl'],
  },
  heading3: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes['3xl'],
  },
  heading4: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes['2xl'],
  },
  heading5: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.xl,
  },
  heading6: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.lg,
  },
  
  // Body text styles
  bodyLarge: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.lg,
  },
  bodyMedium: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.base,
  },
  bodySmall: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.sm,
  },
  bodyXSmall: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.xs,
  },
  
  // Button text styles
  buttonText: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.base,
  },
  buttonTextLarge: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.lg,
  },
  buttonTextSmall: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.sm,
  },
}); 