import {createSwitchNavigator} from 'react-navigation';

import routeNames from 'routes';
import Login from '@routes/Login';
import InitialScreen from '@routes/InitialScreen';
import RegisterUser from '@routes/RegisterUser';

const routes = {
  [routeNames.Login]: Login,
  [routeNames.InitialScreen]: InitialScreen,
  [routeNames.RegisterUser]: RegisterUser,
};

export default createSwitchNavigator(routes, {
  initialRouteName: routeNames.InitialScreen,
});
