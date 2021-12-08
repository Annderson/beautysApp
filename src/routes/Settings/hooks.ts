import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {Actions} from '@data/user/action';
import routeNames from 'routes';

interface Props {
  onCloseApp(): void;
  onNavigateProfile(): void;
}

const useSettings = (): Props => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onNavigateProfile = useCallback(() => {
    navigate(routeNames.Profile);
  }, [navigate]);

  const onCloseApp = useCallback(() => {
    dispatch(Actions.logout());
  }, [dispatch]);

  return {
    onCloseApp,
    onNavigateProfile,
  };
};

export default useSettings;
