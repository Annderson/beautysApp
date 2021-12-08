import {StyleSheet} from 'react-native';

import Colors from './colors';
import Dimensions from './dimensions';

const Layouts = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Dimensions.size40,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    color: Colors.fonts.white,
  },
});

export default Layouts;
