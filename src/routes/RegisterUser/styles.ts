import {StyleSheet} from 'react-native';

import {Layouts, Dimensions, Colors, TypeScale} from 'styles';

const styles = StyleSheet.create({
  root: {
    ...Layouts.flex,
    justifyContent: 'space-between',
  },
  container: {
    ...Layouts.container,
    backgroundColor: Colors.generic.defaultBackground,
  },
  formWrapper: {
    marginTop: Dimensions.size40,
    marginBottom: Dimensions.size10,
  },
  logo: {
    marginTop: Dimensions.size40,
  },
  logoWrapper: {
    ...Layouts.centered,
  },
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
  title: {
    ...TypeScale.fonts.fontMedium,
    ...TypeScale.fonts.size18,
    textAlign: 'center',
    marginBottom: Dimensions.size20,
  },
});

export default styles;
