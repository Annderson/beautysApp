import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Welcome from 'routes/Welcome';

import routeNames from 'routes';
import LoggedNavigator from 'navigation/LoggedNavigator';
import NotLoggedNavigator from 'navigation/NotLoggedNavigator';

const routes = {
  [routeNames.LoggedNavigator]: LoggedNavigator,
  [routeNames.NotLoggedNavigator]: NotLoggedNavigator,
  [routeNames.Welcome]: Welcome,
};

export default createAppContainer(
  createSwitchNavigator(routes, {
    initialRouteName: routeNames.Welcome,
  }),
);
