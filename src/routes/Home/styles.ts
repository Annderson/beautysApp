import {StyleSheet} from 'react-native';

import {Layouts, Colors, Dimensions, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    backgroundColor: Colors.generic.defaultBackground,
  },
  containerCard: {
    marginVertical: Dimensions.size40,
  },
  imgRoot: {
    ...Layouts.centered,
  },
  imgContainer: {
    ...Layouts.centered,
    borderRadius: Dimensions.size100,
    borderColor: Colors.generic.primaryOrange,
    borderWidth: Dimensions.size1,
    marginVertical: Dimensions.size30,
    position: 'relative',
    height: Dimensions.size100,
    width: Dimensions.size100,
  },
  title: {
    ...TypeScale.fonts.size18,
    ...TypeScale.fonts.fontBold,
    color: Colors.fonts.grayDark,
    textAlign: 'center',
  },
  textSchedule: {
    ...TypeScale.fonts.size16,
    ...TypeScale.fonts.fontMedium,
    color: Colors.fonts.grayDark,
  },
});

export default styles;
