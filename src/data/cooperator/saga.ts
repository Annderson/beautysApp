import {SagaIterator} from '@redux-saga/types';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import cooperatorApi from '@data/api/cooperator';
import {setTokenInterceptor, getToken} from '@helpers/saga';

import {Types, Actions} from './action';

function* getCooperator(): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    const listCooperator = yield call(cooperatorApi.getCooperator);
    let cooperatorMap = {};
    listCooperator.forEach((item: any) => {
      cooperatorMap = {...cooperatorMap, [item.id]: item};
    });

    yield put(Actions.setCooperator(listCooperator, cooperatorMap));
  } catch (error) {}
}

export default function* root(): SagaIterator {
  yield takeLatest(Types.getCooperator, getCooperator);
}
