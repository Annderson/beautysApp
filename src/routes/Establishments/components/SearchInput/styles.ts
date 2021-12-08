import {StyleSheet} from 'react-native';

import {Layouts, Dimensions, Colors} from 'styles';

const styles = StyleSheet.create({
  iconInput: {
    marginHorizontal: Dimensions.size10,
    color: Colors.generic.white,
  },
  input: {
    ...Layouts.flex,
    color: Colors.fonts.white,
    paddingHorizontal: Dimensions.size10,
  },
  inputSection: {
    ...Layouts.centered,
    backgroundColor: Colors.generic.primaryOrange,
    borderColor: Colors.generic.white,
    borderRadius: Dimensions.size10,
    borderWidth: Dimensions.size1,
    flexDirection: 'row',
  },
});

export default styles;
