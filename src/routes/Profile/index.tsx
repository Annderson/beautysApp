import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LightStatusBar from '@components/LightStatusBar';
import ButtonTop from '@components/ButtonTop';
import InputTextLight from '@components/InputTextLight';
import Button, {Variant} from '@components/Button';
import locales from '@locales/profile';
import {Colors, Dimensions} from 'styles';

import styles from './styles';
import useProfile from './hooks';

const Profile = (): JSX.Element => {
  const {
    onNavigateBack,
    name,
    email,
    password,
    newPassword,
    confirmPassword,
    onSendUpdateUser,
    setConfirmPassword,
    setEmail,
    setName,
    setNewPassword,
    setPassword,
  } = useProfile();
  return (
    <View style={styles.container}>
      <LightStatusBar />
      <ButtonTop text={locales.title} onPress={onNavigateBack} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imgContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            color={Colors.generic.primaryOrange}
            size={Dimensions.size50}
          />
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons
              name="camera-outline"
              color={Colors.generic.white}
              size={Dimensions.size18}
            />
          </TouchableOpacity>
        </View>
        <InputTextLight
          value={name}
          placeholder={locales.name}
          onChangeText={setName}
          srcIcon="account-outline"
        />
        <InputTextLight
          value={email}
          placeholder={locales.email}
          onChangeText={setEmail}
          srcIcon="email-outline"
        />
        <View style={styles.space} />
        <InputTextLight
          value={password}
          placeholder={locales.currentPassword}
          onChangeText={setPassword}
          secureTextEntry={true}
          srcIcon="lock-outline"
        />
        <InputTextLight
          value={newPassword}
          placeholder={locales.newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
          srcIcon="lock-outline"
        />
        <InputTextLight
          value={confirmPassword}
          placeholder={locales.confirmNewPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          srcIcon="lock-outline"
        />
        <View style={styles.space} />
        <View style={styles.space} />

        <Button
          onPress={onSendUpdateUser}
          variant={
            password && newPassword && confirmPassword
              ? Variant.OrangeBackground
              : Variant.Disabled
          }
          title={locales.confirmChange}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
