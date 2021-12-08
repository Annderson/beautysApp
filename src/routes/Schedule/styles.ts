import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const styles = StyleSheet.create({
  root: {
    ...Layouts.flex,
    backgroundColor: Colors.generic.defaultBackground,
    paddingHorizontal: Dimensions.size20,
  },
  title: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size16,
    marginBottom: Dimensions.size5,
  },
  textListEmpty: {
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size16,
    marginVertical: Dimensions.size15,
  },
  viewScheduleNext: {
    marginVertical: Dimensions.size8,
    padding: Dimensions.size5,
  },
  viewSchedulePrevious: {
    marginVertical: Dimensions.size8,
    padding: Dimensions.size5,
  },
});

export default styles;
