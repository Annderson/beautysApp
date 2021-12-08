import {StyleSheet} from 'react-native';

import {Colors, Dimensions, Layouts} from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.flex,
    backgroundColor: Colors.generic.defaultBackground,
    padding: Dimensions.size10,
  },
  imgContainer: {
    ...Layouts.centered,
    borderRadius: Dimensions.size100,
    borderColor: Colors.generic.primaryOrange,
    borderWidth: Dimensions.size1,
    marginBottom: Dimensions.size30,
    position: 'relative',
    height: Dimensions.size100,
    width: Dimensions.size100,
  },
  iconButton: {
    backgroundColor: Colors.generic.primaryOrange,
    bottom: Dimensions.size1,
    borderRadius: Dimensions.size20,
    padding: Dimensions.size5,
    position: 'absolute',
    right: 0,
  },
  scrollView: {
    height: '100%',
    marginTop: Dimensions.size20,
    padding: Dimensions.size10,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  space: {
    height: Dimensions.size25,
  },
});

export default styles;
