import {StyleSheet} from 'react-native';

import {Layouts, Colors, TypeScale} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    justifyContent: 'space-between',
    backgroundColor: Colors.generic.defaultBackground,
  },
  text: {
    ...TypeScale.fonts.size35,
    color: Colors.fonts.primary,
    marginTop: 100,
  },
});

export default styles;
