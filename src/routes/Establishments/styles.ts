import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const styles = StyleSheet.create({
  root: {
    ...Layouts.flex,
    backgroundColor: Colors.generic.defaultBackground,
  },
  searchContainer: {
    backgroundColor: Colors.generic.defaultBackground,
    paddingHorizontal: Dimensions.size20,
    paddingBottom: Dimensions.size20,
    paddingTop: Dimensions.size5,
  },
  container: {
    backgroundColor: Colors.generic.defaultBackground,
    paddingHorizontal: Dimensions.size25,
    marginVertical: Dimensions.size10,
  },
  textResults: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size16,
    color: Colors.fonts.grayDark,
    marginBottom: Dimensions.size10,
  },
});

export default styles;
