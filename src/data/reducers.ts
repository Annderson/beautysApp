import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import sagaMiddleware, {runSagaMiddleware} from './sagas';

import notification from './notification/reducer';
import user from './user/reducer';
import establishment from './establishment/reducer';
import cooperator from './cooperator/reducer';
import schedule from './schedule/reducer';
import procedure from './procedure/reducer';

const keyPrefix = 'tcc:';

const persistConfig = {
  key: 'root',
  keyPrefix,
  blacklist: [
    'notification',
    'establishment',
    'schedule',
    'cooperator',
    'procedure',
  ],
  storage: AsyncStorage,
};

const combinedReducers = combineReducers({
  notification,
  user,
  establishment,
  cooperator,
  procedure,
  schedule,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(persistedReducer, enhancer);

runSagaMiddleware();

export const persistor = persistStore(store);
export default store;
