import {StyleSheet} from 'react-native';

import {Layouts, TypeScale, Colors, Dimensions} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    justifyContent: 'space-between',
    backgroundColor: Colors.generic.defaultBackground,
  },
  logoWrapper: {
    ...Layouts.centered,
  },
  text: {
    ...TypeScale.fonts.size28,
    ...TypeScale.fonts.fontRegular,
    color: Colors.fonts.grayDark,
    marginTop: Dimensions.size40,
    textAlign: 'center',
  },
  logo: {
    marginTop: 100,
  },
  buttonsWrapper: {
    ...Layouts.centered,
    marginBottom: Dimensions.size50,
  },
});

export default styles;
