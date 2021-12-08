import {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Animated} from 'react-native';

import {Actions} from '@data/notification/action';
import {TypeNotification} from 'data/notification/types';

interface Props {
  fadeAnim: any;
  message: string;
  title?: string;
  type: TypeNotification;
}

const useToast = (): Props => {
  const dispatch = useDispatch();
  const {notification} = useSelector((state: any) => state.notification);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<TypeNotification>(TypeNotification.info);

  const start = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const stop = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const clearData = useCallback(() => {
    dispatch(Actions.hideNotification());
  }, [dispatch]);

  const openToast = useCallback(() => {
    setTitle(notification.title || '');
    setMessage(notification.message || '');
    setType(notification.type);
    start();
    setTimeout(() => {
      clearData();
    }, 5000);
  }, [clearData, notification, start]);

  const closeToast = useCallback(() => {
    setTitle('');
    setMessage('');
    stop();
  }, [stop]);

  useEffect(() => {
    closeToast();
    if (notification) {
      openToast();
    }
  }, [closeToast, notification, openToast]);

  return {
    fadeAnim,
    message,
    title,
    type,
  };
};

export default useToast;
