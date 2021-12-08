import createSagaMiddleware, {SagaIterator, Task} from 'redux-saga';
import {fork} from '@redux-saga/core/effects';

import userSagas from '@data/user/saga';
import establishmentSagas from '@data/establishment/saga';
import schedulesSagas from '@data/schedule/saga';
import cooperatorSagas from '@data/cooperator/saga';
import procedureSagas from '@data/procedure/saga';

function* rootSaga(): SagaIterator {
  yield fork(establishmentSagas);
  yield fork(cooperatorSagas);
  yield fork(procedureSagas);
  yield fork(schedulesSagas);
  yield fork(userSagas);
}

const sagaMiddleware = createSagaMiddleware();

let sagaTask: Task | undefined;

export const runSagaMiddleware = (): void => {
  sagaTask = sagaMiddleware.run(rootSaga);
};

export const stopSagaMiddleware = (): void => {
  if (sagaTask) {
    sagaTask.cancel();
    sagaTask = undefined;
  }
};

export default sagaMiddleware;
