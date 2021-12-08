import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.centered,
    backgroundColor: Colors.generic.transparent,
    borderColor: Colors.generic.primaryOrange,
    borderWidth: Dimensions.size1,
    flexDirection: 'row',
    height: Dimensions.size60,
    padding: Dimensions.size10,
  },
  text: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size16,
    color: Colors.fonts.primary,
    marginLeft: Dimensions.size10,
  },
});

export default styles;
