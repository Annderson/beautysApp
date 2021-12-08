import {SagaIterator} from '@redux-saga/types';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import scheduleApi from '@data/api/schedule';
import {setTokenInterceptor, getToken} from '@helpers/saga';
import locales from '@locales/schedule';
import {
  Actions as NotificationActions,
  TypeNotification,
} from '@data/notification';

import {navigate} from '@navigation/service';
import routeNames from '@routes/index';

import {
  Types,
  Actions,
  ScheduleCancelRequest,
  CooperatorsScheduleRequest,
  MakeScheduleRequest,
} from './action';

function* getSchedule(): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    const listSchedule = yield call(scheduleApi.getSchedule);
    yield put(Actions.setSchedule(listSchedule));
  } catch (error) {
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: locales.actions.errorSchedule,
      }),
    );
  }
}

function* getCooperatorsSchedule({
  cooperator_id,
  day,
  month,
  year,
}: CooperatorsScheduleRequest): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    const listSchedule = yield call(
      scheduleApi.getCooperatorSchedule,
      cooperator_id,
      day,
      month,
      year,
    );
    yield put(Actions.setCooperatorsSchedule(listSchedule));
  } catch (error) {
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: locales.actions.errorCooperatorSchedule,
      }),
    );
  }
}

function* postMakeSchedule({makeSchedule}: MakeScheduleRequest): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    yield call(scheduleApi.postMakeSchedule, makeSchedule);
    yield call(navigate, routeNames.Tabs);
    yield put(
      NotificationActions.showNotification({
        title: locales.success,
        type: TypeNotification.success,
        message: locales.actions.successMakeSchedule,
      }),
    );
  } catch (error) {
    console.log('locales.error ', error);
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: locales.actions.errorMakeSchedule,
      }),
    );
  }
}

function* deleteSchedule({
  cooperator_id,
  date,
}: ScheduleCancelRequest): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    const cancel = {cooperator_id, date: date.toISOString()};
    yield call(scheduleApi.deleteSchedule, cancel);
    yield put(Actions.getSchedule());
  } catch (error) {
    console.log('locales.error ', error);
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: locales.actions.errorCancelSchedule,
      }),
    );
  }
}

export default function* root(): SagaIterator {
  yield takeLatest(Types.getSchedule, getSchedule);
  yield takeLatest(Types.getCooperatorsSchedule, getCooperatorsSchedule);
  yield takeLatest(Types.cancelSchedule, deleteSchedule);
  yield takeLatest(Types.makeSchedule, postMakeSchedule);
}
