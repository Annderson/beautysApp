import React from 'react';
import {StatusBar} from 'react-native';

import {Colors} from '@styles/index';

const LightStatusBar = (): JSX.Element => (
  <StatusBar
    backgroundColor={Colors.generic.primaryOrange}
    barStyle="light-content"
  />
);

export default LightStatusBar;
