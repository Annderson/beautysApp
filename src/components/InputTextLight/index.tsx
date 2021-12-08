import React from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors, Dimensions} from 'styles';

import styles from './styles';

interface Props {
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  placeholder?: string;
  srcIcon?: string;
  value: string | undefined;
  secureTextEntry?: boolean;
}

const InputTextLight = ({
  keyboardType = 'default',
  onChangeText,
  placeholder,
  secureTextEntry,
  srcIcon,
  value,
}: Props): JSX.Element => {
  return (
    <View style={styles.inputSection}>
      {srcIcon && (
        <MaterialCommunityIcons
          name={srcIcon}
          style={styles.iconInput}
          size={Dimensions.size20}
        />
      )}
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.fonts.grayDark}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputTextLight;
