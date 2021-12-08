import {StyleSheet} from 'react-native';

import {Layouts, Dimensions, Colors} from 'styles';

const styles = StyleSheet.create({
  iconInput: {
    marginHorizontal: Dimensions.size10,
  },
  input: {
    ...Layouts.flex,
    color: Colors.fonts.white,
    paddingHorizontal: Dimensions.size10,
  },
  inputSection: {
    ...Layouts.centered,
    backgroundColor: Colors.generic.gray,
    borderRadius: Dimensions.size10,
    flexDirection: 'row',
    marginBottom: Dimensions.size10,
  },
});

export default styles;
