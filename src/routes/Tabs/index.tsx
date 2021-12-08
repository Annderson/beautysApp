import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Settings from '@routes/Settings';
import Establishments from '@routes/Establishments';
import Schedule from '@routes/Schedule';
import {NavigationContainer} from '@react-navigation/native';
import Home from '@routes/Home';
// import DarkStatusBar from '@components/DarkStatusBar';

import {Colors} from 'styles';
import routeNames from 'routes';

const Tab = createBottomTabNavigator();

const Tabs = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          lazy: false,
          tabBarActiveTintColor: Colors.generic.primaryOrange,
        }}>
        <Tab.Screen
          name={routeNames.Home}
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={routeNames.Establishments}
          component={Establishments}
          options={{
            tabBarActiveTintColor: Colors.generic.white,
            tabBarInactiveTintColor: Colors.generic.grayDark,
            tabBarStyle: {backgroundColor: Colors.generic.primaryOrange},
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="view-list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={routeNames.Schedule}
          component={Schedule}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="clock-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={routeNames.Settings}
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
