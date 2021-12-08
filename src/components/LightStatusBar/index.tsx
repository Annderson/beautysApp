import React from 'react';
import {StatusBar} from 'react-native';

import {Colors} from '@styles/index';

const LightStatusBar = (): JSX.Element => (
  <StatusBar
    backgroundColor={Colors.generic.defaultBackground}
    barStyle="dark-content"
  />
);

export default LightStatusBar;
