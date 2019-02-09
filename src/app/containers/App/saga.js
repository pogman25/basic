import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import fetchData from '../../../utils/fetch';
import * as duck from './duck';
import { getNextPage, getTotalCountFromState } from './selectors';

// saga запросов к серверу
export function* callAPI(url, params) {
	try {
		return yield call(fetchData, url, params);
	} catch (error) {
		if (error.code === 'ECONNABORTED') {
			yield put(duck.showError('Проблемы с сервером, попробуйте позже.'));
		}
		if (error.code === 'ECONNREFUSED') {
			yield put(duck.showError('Нет связи с сервером.'));
		}
		const { response } = error;
		if (!response) {
			yield put(duck.showError('Обрыв связи, проверьте настройки сети'));
		} else {
			const { status } = response;
			switch (status) {
				case 401:
					yield put(
						duck.showError(
							'Ошибка авторизации, попробуйте авторизоваться снова'
						)
					);
					return { status };
				case 403:
					yield put(
						duck.showError('У вас нет прав для просмотра этой страницы')
					);
					return { status };
				default:
					yield put(
						duck.showError('Внутрення ошибка сервера, попробуйте позже')
					);
					return { status };
			}
		}
	}
}

function* fetchPeople(action) {
	const count = yield select(getNextPage);
	const totalCount = yield select(getTotalCountFromState);
	if (!!count) {
		try {
			const resp = yield call(callAPI, 'people/', { params: { page: count } });
			if (resp.status === 200) {
				const { data } = resp;
				const nextPage = !!data.next ? data.next.replace(/\D/g, '') : null;
				yield all([
					yield put(duck.getPeopleSuccess(data.results)),
					put(duck.setNextLink(+nextPage)),
				]);
				if (totalCount !== data.count) {
					put(duck.setTotalCount(data.count));
				}
			} else {
				yield put(duck.showError('Что-то пошло не так'));
			}
		} catch (error) {
			yield put(duck.showError('Что-то пошло не так'));
		}
	}
}

export default function* rootSaga() {
	yield takeLatest(duck.PEOPLE_REQUEST, fetchPeople);
}
