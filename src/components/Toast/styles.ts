import {StyleSheet} from 'react-native';

import {Colors, Dimensions, TypeScale} from 'styles';

const baseWrapper = StyleSheet.create({
  container: {
    borderRadius: Dimensions.size10,
    elevation: 5,
    left: 20,
    padding: Dimensions.size20,
    position: 'absolute',
    right: 20,
    top: 20,
  },
});

const styles = StyleSheet.create({
  ErrorWrapper: {
    ...baseWrapper.container,
    backgroundColor: Colors.generic.error,
  },
  SuccessWrapper: {
    ...baseWrapper.container,
    backgroundColor: Colors.generic.success,
  },
  InfoWrapper: {
    ...baseWrapper.container,
    backgroundColor: Colors.generic.info,
  },
  titleWhite: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size16,
    color: Colors.fonts.white,
    marginBottom: Dimensions.size5,
  },
  messageWhite: {
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size14,
    color: Colors.fonts.white,
  },
});

export default styles;
