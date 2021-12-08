import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts} from 'styles';

const styles = StyleSheet.create({
  body: {
    ...Layouts.container,
    ...Layouts.centered,
  },
  scrollView: {
    backgroundColor: Colors.generic.defaultBackground,
    height: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    marginBottom: Dimensions.size30,
  },
});

export default styles;
