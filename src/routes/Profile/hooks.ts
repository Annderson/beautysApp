import {useCallback, useEffect, useState} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch, useSelector} from 'react-redux';

import {Actions} from '@data/user/action';
import {Actions as NotificationActions} from '@data/notification/action';
import {TypeNotification} from '@data/notification/types';
import locales from '@locales/profile';

import routeNames from 'routes';

interface Props {
  confirmPassword: string;
  email: string;
  onNavigateBack(): void;
  name: string;
  newPassword: string;
  onSendUpdateUser(): void;
  password: string;
  setName(value: string): void;
  setEmail(value: string): void;
  setPassword(value: string): void;
  setNewPassword(value: string): void;
  setConfirmPassword(value: string): void;
}

const useProfile = (): Props => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state: any) => state.user);
  const {navigate} = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const onNavigateBack = useCallback(() => {
    navigate(routeNames.Tabs);
  }, [navigate]);

  const onSendUpdateUser = useCallback(() => {
    if (newPassword !== confirmPassword) {
      dispatch(
        NotificationActions.showNotification({
          type: TypeNotification.info,
          message: locales.actions.errorPasswordInvalid,
        }),
      );
      return;
    }
    dispatch(
      Actions.updateUser({
        name,
        email,
        password: newPassword,
        old_password: password,
      }),
    );
  }, [confirmPassword, dispatch, email, name, newPassword, password]);

  return {
    confirmPassword,
    email,
    onNavigateBack,
    name,
    newPassword,
    onSendUpdateUser,
    password,
    setName,
    setEmail,
    setPassword,
    setNewPassword,
    setConfirmPassword,
  };
};

export default useProfile;
