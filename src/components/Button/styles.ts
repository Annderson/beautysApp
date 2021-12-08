import {StyleSheet} from 'react-native';

import {Layouts, TypeScale, Colors, Dimensions} from 'styles';

const baseWrapper = {
  ...Layouts.centered,
  borderRadius: Dimensions.size10,
  height: Dimensions.size60,
  marginVertical: Dimensions.size10,
};

const styles = StyleSheet.create({
  OrangeWrapper: {
    ...baseWrapper,
    alignSelf: 'stretch',
    backgroundColor: Colors.generic.primaryOrange,
  },
  BlueWrapper: {
    ...Layouts.centered,
    alignSelf: 'stretch',
    borderRadius: Dimensions.size5,
    backgroundColor: Colors.generic.info,
    padding: Dimensions.size8,
  },
  WhiteWrapper: {
    ...baseWrapper,
    alignSelf: 'stretch',
    backgroundColor: Colors.generic.white,
  },
  whiteBorderWrapper: {
    ...baseWrapper,
    alignSelf: 'stretch',
    borderColor: Colors.generic.white,
    borderWidth: 1,
    backgroundColor: Colors.generic.transparent,
  },
  transparentWrapper: {
    ...baseWrapper,
    alignSelf: 'stretch',
    backgroundColor: Colors.generic.transparent,
  },
  disableWrapper: {
    ...baseWrapper,
    alignSelf: 'stretch',
    backgroundColor: Colors.generic.disableOrange,
  },
  whiteText: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size14,
    color: Colors.fonts.white,
  },
  smallWhiteText: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size12,
    color: Colors.fonts.white,
  },
  orangeDarkText: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size14,
    color: Colors.fonts.primary,
  },
  grayDarkText: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size14,
    color: Colors.fonts.grayDark,
  },
  grayText: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size14,
    color: Colors.fonts.gray,
  },
  transparentText: {
    color: Colors.generic.transparent,
  },
});

export default styles;
