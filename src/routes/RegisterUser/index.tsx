import React from 'react';
import {View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import locales from '@locales/registerUser';
import Button, {Variant as ButtonVariant} from '@components/Button';
import ButtonBottom from '@components/ButtonBottom';
import LightStatusBar from '@components/LightStatusBar';
import InputText from '@components/InputText';
import icons from '@assets/icons';

import styles from './styles';
import useRegisterUser from './hooks';

const RegisterUser = (): JSX.Element => {
  const {
    changeConfirmPassword,
    changeEmail,
    changeName,
    changePassword,
    confirmPassword,
    email,
    name,
    onBackInitialScreen,
    onRegisterPress,
    password,
  } = useRegisterUser();
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
            srcIcon={icons.user}
            keyboardType="name-phone-pad"
            value={name}
            placeholder={locales.name}
            onChangeText={changeName}
          />
          <InputText
            srcIcon={icons.email}
            keyboardType="email-address"
            value={email}
            placeholder={locales.email}
            onChangeText={changeEmail}
          />
          <InputText
            keyboardType="default"
            srcIcon={icons.password}
            value={password}
            placeholder={locales.password}
            onChangeText={changePassword}
            secureTextEntry={true}
          />
          <InputText
            keyboardType="default"
            srcIcon={icons.password}
            value={confirmPassword}
            placeholder={locales.confirmPassword}
            onChangeText={changeConfirmPassword}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Button
            onPress={onRegisterPress}
            title={locales.register}
            variant={
              email && name && password && confirmPassword
                ? ButtonVariant.OrangeBackground
                : ButtonVariant.Disabled
            }
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

export default RegisterUser;
