import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.centered,
    backgroundColor: Colors.generic.transparent,
    flexDirection: 'row',
    height: Dimensions.size60,
    padding: Dimensions.size10,
  },
  button: {
    backgroundColor: Colors.generic.defaultBackground,
  },
  text: {
    ...Layouts.flex,
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size20,
    color: Colors.fonts.primary,
    marginLeft: Dimensions.size10,
    textAlign: 'center',
  },
});

export default styles;
