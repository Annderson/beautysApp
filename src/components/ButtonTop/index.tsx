import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import {Colors, Dimensions} from 'styles';

interface Props {
  onPress(): void;
  text: string;
}

const ButtonTop = ({onPress, text}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <MaterialCommunityIcons
          name="arrow-left-thick"
          color={Colors.generic.primaryOrange}
          size={Dimensions.size30}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ButtonTop;
