import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Button, {Variant} from '@components/Button';
import LightStatusBar from '@components/LightStatusBar';
import locales from '@locales/settings';
import {Colors, Dimensions} from 'styles';

import styles from './styles';
import useSettings from './hooks';

interface OptionProps {
  icon: string;
  name: string;
  onPress(): void;
}

const Option = ({icon, name, onPress}: OptionProps): JSX.Element => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <MaterialCommunityIcons
      name={icon}
      color={Colors.generic.primaryOrange}
      size={Dimensions.size25}
    />
    <Text style={styles.textMenu}>{name}</Text>
    <MaterialCommunityIcons
      name="arrow-right-thick"
      color={Colors.generic.primaryOrange}
      size={Dimensions.size25}
    />
  </TouchableOpacity>
);

const Settings = (): JSX.Element => {
  const {onCloseApp, onNavigateProfile} = useSettings();
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            color={Colors.generic.white}
            size={Dimensions.size30}
          />
        </View>
        <Text style={styles.textName}>Anderson Lima</Text>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.line} />
        <Option
          icon="account-outline"
          name={locales.myData}
          onPress={onNavigateProfile}
        />
        <View style={styles.line} />
      </View>
      <View style={styles.button}>
        <Button
          onPress={onCloseApp}
          variant={Variant.OrangeBackground}
          title={locales.closeApp}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
