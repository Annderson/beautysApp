import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.flex,
    backgroundColor: Colors.generic.defaultBackground,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: Dimensions.size30,
    padding: Dimensions.size10,
  },
  imgContainer: {
    ...Layouts.centered,
    backgroundColor: Colors.generic.primaryOrange,
    borderRadius: Dimensions.size50,
    height: Dimensions.size50,
    marginHorizontal: Dimensions.size10,
    width: Dimensions.size50,
  },
  textName: {
    ...TypeScale.fonts.fontMedium,
    ...TypeScale.fonts.size20,
    color: Colors.fonts.grayDark,
  },
  line: {
    backgroundColor: Colors.generic.primaryOrange,
    height: Dimensions.size1,
    width: '100%',
  },
  optionContainer: {
    ...Layouts.flex,
  },
  option: {
    alignItems: 'center',
    backgroundColor: Colors.generic.white,
    flexDirection: 'row',
    padding: Dimensions.size20,
  },
  textMenu: {
    ...Layouts.flex,
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size16,
    color: Colors.fonts.grayDark,
    marginLeft: Dimensions.size10,
  },
  button: {
    borderRadius: Dimensions.size50,
    marginHorizontal: Dimensions.size40,
    marginVertical: Dimensions.size10,
  },
});

export default styles;
