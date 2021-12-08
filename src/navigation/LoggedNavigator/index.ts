import {createSwitchNavigator} from 'react-navigation';
import routeNames from 'routes';
import Tabs from '@routes/Tabs';
import Establishments from '@routes/Establishments';
import EstablishmentsDetails from '@routes/EstablishmentsDetails';
import Home from '@routes/Home';
import Profile from '@routes/Profile';
import Schedule from '@routes/Schedule';
import Settings from '@routes/Settings';

const routes = {
  [routeNames.Establishments]: Establishments,
  [routeNames.EstablishmentsDetails]: EstablishmentsDetails,
  [routeNames.Home]: Home,
  [routeNames.Profile]: Profile,
  [routeNames.Schedule]: Schedule,
  [routeNames.Settings]: Settings,
  [routeNames.Tabs]: Tabs,
};

export default createSwitchNavigator(routes, {
  initialRouteName: routeNames.Tabs,
});
