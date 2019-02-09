import { all, fork } from 'redux-saga/effects';
import appSaga from '../../app/containers/App/saga';

export default function*() {
  yield all([
    fork(appSaga),
  ]);
}
