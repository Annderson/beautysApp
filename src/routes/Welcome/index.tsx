import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {SvgXml} from 'react-native-svg';

import icons from '@assets/icons';

import {Actions} from '@data/user/action';
import DarkStatusBar from '@components/DarkStatusBar';

import styles from './styles';

const Welcome = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(Actions.tryToLogin());
  }, [dispatch]);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <DarkStatusBar />
      <View style={styles.body}>
        <SvgXml
          xml={icons.logoImg}
          width="100%"
          height="100"
          style={styles.logo}
        />
        <SvgXml
          xml={icons.logoText}
          width="100%"
          height="80"
          style={styles.logo}
        />
        <ActivityIndicator color="orange" size="large" />
      </View>
    </ScrollView>
  );
};

export default Welcome;
