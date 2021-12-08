import React from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Colors} from 'styles';

import styles from './styles';

interface Props {
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  placeholder?: string;
  srcIcon?: string;
  value: string | undefined;
  secureTextEntry?: boolean;
}

const InputText = ({
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
        <SvgXml xml={srcIcon} style={styles.iconInput} width="20" height="20" />
      )}
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.fonts.white}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputText;
