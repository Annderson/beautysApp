import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import icons from '@assets/icons';

import styles from './styles';

interface Props {
  onPress(): void;
  text: string;
}

const ButtonBottom = ({onPress, text}: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SvgXml xml={icons.back} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBottom;
