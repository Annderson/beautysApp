import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {SvgXml} from 'react-native-svg';

import Button, {Variant} from '@components/Button';
import LightStatusBar from '@components/LightStatusBar';
import locales from '@locales/initialScreen';
import icons from '@assets/icons';

import styles from './styles';
import useInitialScreen from './hooks';

const InitialScreen = (): JSX.Element => {
  const {onEnterClicked, onRegisterClicked} = useInitialScreen();

  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <View style={styles.logoWrapper}>
        <SvgXml
          xml={icons.logoImg}
          width="100%"
          height="100"
          style={styles.logo}
        />
        <SvgXml xml={icons.logoText} width="100%" height="80" />
        <Text style={styles.text}>{locales.slogan}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          onPress={onEnterClicked}
          title={locales.enter}
          variant={Variant.OrangeBackground}
        />
        <Button
          onPress={onRegisterClicked}
          title={locales.register}
          variant={Variant.NoBackgroundWithTextWhite}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
