import React from 'react';
import {TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import locales from '@locales/establishment';

import {Colors, Dimensions} from 'styles';

import styles from './styles';
import useSearchInput from './hooks';

interface Props {
  onChangeText: (value: string) => void;
}

const InputTextLight = (): JSX.Element => {
  const {search, setSearch} = useSearchInput();
  return (
    <View style={styles.inputSection}>
      <MaterialCommunityIcons
        name="magnify"
        style={styles.iconInput}
        size={Dimensions.size20}
      />
      <TextInput
        style={styles.input}
        keyboardType="name-phone-pad"
        onChangeText={setSearch}
        placeholder={locales.whatSearch}
        placeholderTextColor={Colors.fonts.white}
        value={search}
      />
    </View>
  );
};

export default InputTextLight;
