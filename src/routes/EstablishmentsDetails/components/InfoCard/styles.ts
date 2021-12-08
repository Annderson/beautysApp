import {StyleSheet} from 'react-native';

import {Colors, Dimensions, TypeScale} from 'styles';

const styles = StyleSheet.create({
  detailsContainer: {
    padding: Dimensions.size20,
  },
  title: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size15,
    color: Colors.fonts.grayDark,
    marginTop: Dimensions.size10,
  },
  textAddress: {
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size13,
    color: Colors.fonts.grayDark,
  },
});

export default styles;
