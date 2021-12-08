import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {Actions} from '@data/user/action';

import routeNames from 'routes';

interface Props {
  changeEmail: (value: string) => void;
  changePassword: (value: string) => void;
  email: string;
  onBackInitialScreen: () => void;
  onForgotPasswordPress: () => void;
  onLoginPress: () => void;
  password: string;
}

const useLogin = (): Props => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [email, changeEmail] = useState<string>('');
  const [password, changePassword] = useState<string>('');

  const onBackInitialScreen = useCallback(() => {
    navigate(routeNames.InitialScreen);
  }, [navigate]);
  const onLoginPress = useCallback(() => {
    dispatch(Actions.login({email, password}));
  }, [dispatch, email, password]);
  const onForgotPasswordPress = useCallback(() => {}, []);

  return {
    changeEmail,
    changePassword,
    email,
    onBackInitialScreen,
    onForgotPasswordPress,
    onLoginPress,
    password,
  };
};

export default useLogin;
