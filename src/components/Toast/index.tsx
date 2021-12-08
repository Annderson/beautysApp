import React from 'react';
import {View, Animated, Text} from 'react-native';

import styles from './styles';
import useToast from './hooks';
import {TypeNotification} from 'data/notification/types';

const variantStyle = {
  [TypeNotification.success]: {
    containerStyle: styles.SuccessWrapper,
    messageStyle: styles.messageWhite,
    titleStyle: styles.titleWhite,
  },
  [TypeNotification.error]: {
    containerStyle: styles.ErrorWrapper,
    messageStyle: styles.messageWhite,
    titleStyle: styles.titleWhite,
  },
  [TypeNotification.info]: {
    containerStyle: styles.InfoWrapper,
    messageStyle: styles.messageWhite,
    titleStyle: styles.titleWhite,
  },
};

const Toast = (): JSX.Element => {
  const {fadeAnim, message, title, type} = useToast();

  const {containerStyle, messageStyle, titleStyle} = variantStyle[type];

  return (
    <Animated.View style={[containerStyle, {opacity: fadeAnim}]}>
      <View>
        {!!title && <Text style={titleStyle}>{title}</Text>}
        <Text style={messageStyle}>{message}</Text>
      </View>
    </Animated.View>
  );
};

export default Toast;
