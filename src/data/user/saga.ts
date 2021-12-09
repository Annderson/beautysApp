import {SagaIterator} from '@redux-saga/types';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import {navigate} from '@navigation/service';
import routeNames from '@routes/index';
import locales from '@locales/login';
import registerLocales from '@locales/registerUser';
import userApi from '@data/api/user';
import {setTokenInterceptor, getToken} from '@helpers/saga';
import {
  Actions as NotificationActions,
  TypeNotification,
} from '@data/notification';

import {
  LoginRequest,
  Types,
  Actions,
  RegisterUserRequest,
  UpdateUserRequest,
} from './action';

function* login({credentials}: LoginRequest): SagaIterator {
  try {
    const userInfo = yield call(userApi.login, credentials);
    yield put(Actions.setUser(userInfo));
    yield call(navigate, routeNames.Tabs);
  } catch (error) {
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: locales.actions.errorLogin,
      }),
    );
  }
}

function* logout(): SagaIterator {
  try {
    yield call(navigate, routeNames.NotLoggedNavigator);
    yield put(NotificationActions.hideNotification());
  } catch (error) {
    yield put(NotificationActions.hideNotification());
  }
}

function* updateUser({updateUser: user}: UpdateUserRequest): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    const userUpdate = yield call(userApi.updateUser, user);
    yield put(Actions.setUpdateUser(userUpdate));
    yield call(navigate, routeNames.Tabs);
    yield put(
      NotificationActions.showNotification({
        title: registerLocales.success,
        type: TypeNotification.success,
        message: registerLocales.actions.successUpdateUser,
      }),
    );
  } catch (error) {
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: registerLocales.actions.errorUpdateUserData,
      }),
    );
  }
}

function* registerUser({userAccount}: RegisterUserRequest): SagaIterator {
  try {
    yield call(userApi.registerUser, userAccount);
    yield call(navigate, routeNames.InitialScreen);
    yield put(
      NotificationActions.showNotification({
        title: registerLocales.success,
        type: TypeNotification.success,
        message: registerLocales.actions.successUserAccount,
      }),
    );
  } catch (error: any) {
    if (error && error.message) {
      yield put(
        NotificationActions.showNotification({
          title: locales.error,
          type: TypeNotification.error,
          message: registerLocales.actions.errorEmailInvalid,
        }),
      );
    } else {
      yield put(
        NotificationActions.showNotification({
          title: locales.error,
          type: TypeNotification.error,
          message: registerLocales.actions.errorServer,
        }),
      );
    }
  }
}

function* checkLoginToken(): SagaIterator {
  try {
    const tokenUser = yield select(getToken);
    if (tokenUser) {
      yield call(navigate, routeNames.LoggedNavigator);
    } else {
      yield call(navigate, routeNames.NotLoggedNavigator);
    }
  } catch (error) {
    yield call(navigate, routeNames.NotLoggedNavigator);
  }
}

export default function* root(): SagaIterator {
  yield takeLatest(Types.tryToLogin, checkLoginToken);
  yield takeLatest(Types.login, login);
  yield takeLatest(Types.logout, logout);
  yield takeLatest(Types.registerUser, registerUser);
  yield takeLatest(Types.updateUser, updateUser);
}
