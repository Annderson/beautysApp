import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.flex,
    backgroundColor: Colors.generic.defaultBackground,
  },
  imgContainer: {
    backgroundColor: Colors.generic.dark,
    height: Dimensions.size250,
    width: Dimensions.fullSize,
  },
  containerTopView: {
    position: 'absolute',
    top: Dimensions.size10,
    right: Dimensions.size15,
    left: Dimensions.size15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  containerEvaluation: {
    backgroundColor: Colors.generic.transparentBlack,
    borderBottomLeftRadius: Dimensions.size10,
    borderTopRightRadius: Dimensions.size10,
    padding: Dimensions.size10,
  },
  date: {
    padding: Dimensions.size20,
    width: Dimensions.fullSize,
  },
  textValue: {
    ...TypeScale.fonts.size16,
    ...TypeScale.fonts.fontBold,
    color: Colors.fonts.white,
    textAlign: 'center',
  },
  textSubValue: {
    ...TypeScale.fonts.size12,
    ...TypeScale.fonts.fontLight,
    color: Colors.fonts.white,
    marginTop: Dimensions.size5,
  },
  buttonTop: {
    backgroundColor: Colors.generic.transparent,
  },
  buttonContainer: {
    padding: Dimensions.size20,
  },
  img: {
    height: Dimensions.fullSize,
    width: Dimensions.fullSize,
    resizeMode: 'stretch',
  },
});

export default styles;
