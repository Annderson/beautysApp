import {SagaIterator} from '@redux-saga/types';
import {call, put, takeLatest} from 'redux-saga/effects';

import establishmentApi from '@data/api/establishment';
import {
  Actions as NotificationActions,
  TypeNotification,
} from '@data/notification';

import locales from '@locales/establishment';

import {Actions, Types} from './action';

function* getEstablishment(): SagaIterator {
  yield put(Actions.setLoading(true));
  try {
    const list = yield call(establishmentApi.getEstablishment);
    let establishmentsMap = {};
    list.forEach((item: any) => {
      establishmentsMap = {...establishmentsMap, [item.id]: item};
    });
    yield put(Actions.setEstablishment(list, establishmentsMap));
    yield put(Actions.setLoading(false));
  } catch (error) {
    yield put(Actions.setLoading(false));
    yield put(
      NotificationActions.showNotification({
        title: locales.error,
        type: TypeNotification.error,
        message: locales.actions.errorServer,
      }),
    );
  }
}

export default function* root(): SagaIterator {
  yield takeLatest(Types.getEstablishment, getEstablishment);
}
