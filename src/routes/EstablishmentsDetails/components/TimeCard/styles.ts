import {StyleSheet} from 'react-native';

import {Colors, Dimensions, TypeScale} from 'styles';
/*
const Constants = {
  colorGreenLight: '#9DE6F7',
  colorGreen: '#309AA6',
};
*/
const styles = StyleSheet.create({
  container: {
    borderColor: Colors.generic.grayLight,
    borderBottomWidth: Dimensions.size1,
    borderTopWidth: Dimensions.size1,
    marginVertical: Dimensions.size20,
    paddingHorizontal: Dimensions.size15,
    paddingVertical: Dimensions.size25,
    width: Dimensions.fullSize,
  },
  timeCard: {
    backgroundColor: Colors.generic.transparent,
    borderColor: Colors.generic.grayLight,
    borderWidth: Dimensions.size2,
    borderRadius: Dimensions.size10,
    marginHorizontal: Dimensions.size5,
    paddingHorizontal: Dimensions.size20,
    paddingVertical: Dimensions.size8,
    width: Dimensions.size80,
  },
  timeCardSelected: {
    backgroundColor: Colors.generic.disableOrange,
    borderColor: Colors.generic.primaryOrange,
    borderWidth: Dimensions.size2,
    borderRadius: Dimensions.size10,
    marginHorizontal: Dimensions.size5,
    paddingHorizontal: Dimensions.size20,
    paddingVertical: Dimensions.size8,
    width: Dimensions.size80,
  },
  textTime: {
    color: Colors.generic.grayLight,
    textAlign: 'center',
  },
  textTimeSelected: {
    ...TypeScale.fonts.fontBold,
    color: Colors.generic.black,
    textAlign: 'center',
  },
});

export default styles;
