import {StyleSheet} from 'react-native';

import {Colors, Dimensions, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: Dimensions.size1,
    borderColor: Colors.generic.gray,
    paddingVertical: Dimensions.size15,
    width: Dimensions.fullSize,
  },
  imgContainer: {
    backgroundColor: Colors.generic.dark,
    borderRadius: Dimensions.size10,
    height: Dimensions.size200,
    width: Dimensions.fullSize,
  },
  img: {
    borderRadius: Dimensions.size5,
    height: Dimensions.size200,
    width: Dimensions.size200,
    resizeMode: 'stretch',
  },
  title: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size15,
    color: Colors.fonts.grayDark,
    marginTop: Dimensions.size10,
  },
  textAddress: {
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size13,
    color: Colors.fonts.grayDark,
  },
});

export default styles;
