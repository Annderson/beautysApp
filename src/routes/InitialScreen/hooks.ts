import {useCallback} from 'react';
import {useNavigation} from 'react-navigation-hooks';

import routeNames from 'routes';

interface Props {
  onEnterClicked: () => void;
  onRegisterClicked: () => void;
}

const useInitialScreen = (): Props => {
  const {navigate} = useNavigation();
  const onEnterClicked = useCallback((): void => {
    navigate(routeNames.Login);
  }, [navigate]);

  const onRegisterClicked = useCallback((): void => {
    navigate(routeNames.RegisterUser);
  }, [navigate]);

  return {
    onEnterClicked,
    onRegisterClicked,
  };
};

export default useInitialScreen;
