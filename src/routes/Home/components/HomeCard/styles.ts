import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts, TypeScale} from 'styles';

const baseStatusText = {
  ...TypeScale.fonts.fontBold,
  ...TypeScale.fonts.size11,
  borderRadius: Dimensions.size10,
  color: Colors.fonts.white,
  marginBottom: Dimensions.size5,
  paddingVertical: Dimensions.size2,
  width: Dimensions.size90,
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.generic.white,
    borderRadius: Dimensions.size10,
    elevation: Dimensions.size5,
    shadowColor: Colors.generic.dark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Dimensions.size10,
    padding: Dimensions.size10,
    width: Dimensions.fullSize,
  },
  separate: {
    backgroundColor: Colors.generic.gray,
    height: Dimensions.fullSize,
    marginHorizontal: 3,
    width: Dimensions.size1,
  },
  viewDate: {
    ...Layouts.centered,
    width: '20%',
  },
  viewInfo: {
    padding: Dimensions.size5,
    width: '75%',
  },
  dayText: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size16,
    marginVertical: Dimensions.size3,
    textAlign: 'center',
  },
  subText2: {
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size12,
  },
  subText3: {
    ...TypeScale.fonts.fontRegular,
    ...TypeScale.fonts.size10,
    marginTop: Dimensions.size3,
    marginBottom: Dimensions.size12,
  },
  statusCancelText: {
    ...baseStatusText,
    backgroundColor: Colors.generic.error,
    textAlign: 'center',
  },
  statusFinishText: {
    ...baseStatusText,
    backgroundColor: Colors.generic.success,
    textAlign: 'center',
  },
  title: {
    ...TypeScale.fonts.fontBold,
    ...TypeScale.fonts.size14,
    marginBottom: Dimensions.size10,
  },
});

export default styles;
