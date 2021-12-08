import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainerComponent} from 'react-navigation';

import RootNavigator from '@navigation/RootNavigator';
import {setNavigator} from '@navigation/service';
import store, {persistor} from '@data/reducers';
import Toast from '@components/Toast';

const App = () => {
  const onNavigatorRef = React.useCallback(
    (nav: NavigationContainerComponent | null): void => {
      setNavigator(nav);
    },
    [],
  );
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toast />
        <RootNavigator ref={onNavigatorRef} />
      </PersistGate>
    </Provider>
  );
};

export default App;
