import {StyleSheet} from 'react-native';

import {Layouts, Dimensions, Colors} from 'styles';

const styles = StyleSheet.create({
  iconInput: {
    marginHorizontal: Dimensions.size10,
    color: Colors.generic.grayDark,
  },
  input: {
    ...Layouts.flex,
    color: Colors.fonts.grayDark,
    paddingHorizontal: Dimensions.size10,
  },
  inputSection: {
    ...Layouts.centered,
    backgroundColor: Colors.generic.defaultBackground,
    borderColor: Colors.generic.primaryOrange,
    borderRadius: Dimensions.size10,
    borderWidth: Dimensions.size1,
    flexDirection: 'row',
    marginBottom: Dimensions.size10,
  },
});

export default styles;
