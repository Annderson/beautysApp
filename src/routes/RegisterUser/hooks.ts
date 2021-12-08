import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import locales from '@locales/registerUser';
import {Actions} from '@data/user/action';
import {Actions as NotificationActions} from '@data/notification/action';
import {TypeNotification} from '@data/notification/types';

import routeNames from 'routes';

interface Props {
  changeConfirmPassword: (value: string) => void;
  changeEmail: (value: string) => void;
  changeName: (value: string) => void;
  changePassword: (value: string) => void;
  confirmPassword: string;
  email: string;
  name: string;
  onBackInitialScreen: () => void;
  onForgotPasswordPress: () => void;
  onRegisterPress: () => void;
  password: string;
}

const useRegisterUser = (): Props => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [name, changeName] = useState<string>('');
  const [email, changeEmail] = useState<string>('');
  const [password, changePassword] = useState<string>('');
  const [confirmPassword, changeConfirmPassword] = useState<string>('');

  const onBackInitialScreen = useCallback(() => {
    navigate(routeNames.InitialScreen);
  }, [navigate]);
  const onRegisterPress = useCallback(() => {
    if (password !== confirmPassword) {
      dispatch(
        NotificationActions.showNotification({
          title: locales.error,
          type: TypeNotification.error,
          message: locales.actions.errorPasswordInvalid,
        }),
      );
      return;
    }
    dispatch(Actions.registerUser({email, name, password}));
  }, [confirmPassword, dispatch, email, name, password]);
  const onForgotPasswordPress = useCallback(() => {}, []);

  return {
    changeConfirmPassword,
    changeEmail,
    changeName,
    changePassword,
    confirmPassword,
    email,
    name,
    onBackInitialScreen,
    onForgotPasswordPress,
    onRegisterPress,
    password,
  };
};

export default useRegisterUser;
