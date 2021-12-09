import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {Actions} from '@data/user/action';
import routeNames from 'routes';

interface Props {
  onCloseApp(): void;
  onNavigateProfile(): void;
  userName: string;
}

const useSettings = (): Props => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const [userName, setUserName] = useState<string>('');

  const {userInfo} = useSelector((state: any) => state.user);

  const onNavigateProfile = useCallback(() => {
    navigate(routeNames.Profile);
  }, [navigate]);

  const onCloseApp = useCallback(() => {
    dispatch(Actions.logout());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.name) {
      setUserName(userInfo.name);
    }
  }, [userInfo]);

  return {
    userName,
    onCloseApp,
    onNavigateProfile,
  };
};

export default useSettings;
