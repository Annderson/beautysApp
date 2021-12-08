import {SagaIterator} from '@redux-saga/types';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import procedureApi from '@data/api/procedure';
import {setTokenInterceptor, getToken} from '@helpers/saga';

import {Types, Actions} from './action';

function* getProcedure(): SagaIterator {
  const tokenUser = yield select(getToken);
  try {
    setTokenInterceptor(tokenUser);
    const listProcedure = yield call(procedureApi.getProcedure);
    let procedureMap = {};
    listProcedure.forEach((item: any) => {
      procedureMap = {...procedureMap, [item.id]: item};
    });

    yield put(Actions.setProcedure(listProcedure, procedureMap));
  } catch (error) {}
}

export default function* root(): SagaIterator {
  yield takeLatest(Types.getProcedure, getProcedure);
}
