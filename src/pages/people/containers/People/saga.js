import {
  all, call, put, takeLatest, select,
} from 'redux-saga/effects';
import callAPI from 'src/app/containers/App/saga';
import * as appDuck from 'src/app/containers/App/duck';
import * as duck from './duck';
import { getNextPage, getTotalCountFromState } from './selectors';

function* fetchPeople() {
  const count = yield select(getNextPage);
  const totalCount = yield select(getTotalCountFromState);
  if (count) {
    try {
      const resp = yield call(callAPI, 'people/', { params: { page: count } });
      if (resp.status === 200) {
        const { data } = resp;
        const nextPage = data.next ? data.next.replace(/\D/g, '') : null;
        yield all([
          yield put(duck.getPeopleSuccess(data.results)),
          put(duck.setNextLink(+nextPage)),
        ]);
        if (totalCount !== data.count) {
          put(duck.setTotalCount(data.count));
        }
      } else {
        yield put(appDuck.showError('Что-то пошло не так'));
      }
    } catch (error) {
      yield put(appDuck.showError('Что-то пошло не так'));
    } finally {
      yield put(duck.getPeopleReceived());
    }
  }
}

export default function* rootSaga() {
  yield takeLatest(duck.PEOPLE_REQUEST, fetchPeople);
}
