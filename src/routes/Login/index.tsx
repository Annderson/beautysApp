import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import locales from '@locales/login';
import Button, {Variant as ButtonVariant} from '@components/Button';
import ButtonBottom from '@components/ButtonBottom';
import LightStatusBar from '@components/LightStatusBar';
import InputText from '@components/InputText';
import icons from '@assets/icons';

import styles from './styles';
import useLogin from './hooks';

const Login = (): JSX.Element => {
  const {
    changeEmail,
    changePassword,
    email,
    onBackInitialScreen,
    onForgotPasswordPress,
    onLoginPress,
    password,
  } = useLogin();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <LightStatusBar />
        <View style={styles.logoWrapper}>
          <SvgXml
            xml={icons.logoImg}
            width="90%"
            height="90"
            style={styles.logo}
          />
          <SvgXml xml={icons.logoText} width="100%" height="70" />
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>{locales.title}</Text>
          <InputText
            srcIcon={icons.email}
            keyboardType="email-address"
            value={email}
            placeholder={locales.email}
            onChangeText={changeEmail}
          />
          <InputText
            srcIcon={icons.password}
            keyboardType="default"
            value={password}
            placeholder={locales.password}
            onChangeText={changePassword}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Button
            onPress={onLoginPress}
            title={locales.enter}
            variant={
              email && password
                ? ButtonVariant.OrangeBackground
                : ButtonVariant.Disabled
            }
          />
          <Button
            onPress={onForgotPasswordPress}
            title={locales.forgotPassword}
            variant={ButtonVariant.NoBackground}
          />
        </View>
      </View>
      <ButtonBottom
        onPress={onBackInitialScreen}
        text={locales.backInitialScreen}
      />
    </View>
  );
};

export default Login;
