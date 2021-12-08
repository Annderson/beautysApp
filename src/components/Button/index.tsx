import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  onPress(): void;
  variant?: Variant;
}

export enum Variant {
  NoBackgroundWithTextWhite = 'NoBackgroundWithTextWhite',
  OrangeBackground = 'OrangeBackground',
  BlueBackground = 'BlueBackground',
  WhiteBackground = 'WhiteBackground',
  NoBackground = 'NoBackground',
  WhiteBorder = 'WhiteBorder',
  Disabled = 'Disabled',
}

const variantStyle = {
  WhiteBackground: {
    containerStyle: styles.WhiteWrapper,
    textStyle: styles.orangeDarkText,
  },
  OrangeBackground: {
    containerStyle: styles.OrangeWrapper,
    textStyle: styles.grayDarkText,
  },
  BlueBackground: {
    containerStyle: styles.BlueWrapper,
    textStyle: styles.smallWhiteText,
  },
  NoBackground: {
    containerStyle: styles.transparentWrapper,
    textStyle: styles.grayDarkText,
  },
  NoBackgroundWithTextWhite: {
    containerStyle: styles.transparentWrapper,
    textStyle: styles.grayDarkText,
  },
  WhiteBorder: {
    containerStyle: styles.whiteBorderWrapper,
    textStyle: styles.grayDarkText,
  },
  Disabled: {
    containerStyle: styles.disableWrapper,
    textStyle: styles.grayText,
  },
};

const Button = ({
  title,
  onPress,
  variant = Variant.WhiteBackground,
}: Props): JSX.Element => {
  const {containerStyle, textStyle} = variantStyle[variant];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={variant !== Variant.Disabled ? onPress : undefined}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
