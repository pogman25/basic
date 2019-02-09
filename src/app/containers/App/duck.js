import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';

// Actions

export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

export const PEOPLE_REQUEST = 'app/PEOPLE_REQUEST';
export const PEOPLE_RECEIVE_SUCCESS = 'app/PEOPLE_RECEIVE_SUCCESS';
export const PEOPLE_RECEIVE_FAILURE = 'app/PEOPLE_RECEIVE_FAILURE';
export const GET_TOTAL_COUNT = 'app/GET_TOTAL_COUNT';
export const SET_NEXT_PEOPLE_LINK = 'app/SET_NEXT_PEOPLE_LINK';

// Reducers

const isFetching = (state = false, action) => {
	switch (action.type) {
		case PEOPLE_REQUEST:
			return true;
		case PEOPLE_RECEIVE_SUCCESS:
		case PEOPLE_RECEIVE_FAILURE:
			return false;
		default:
			return state;
	}
};

const people = (state = [], action) => {
	switch (action.type) {
		case PEOPLE_RECEIVE_SUCCESS:
			return [...state, ...action.payload];
		default:
			return state;
	}
};

const totalCount = (state = 0, action) => {
	switch (action.type) {
		case GET_TOTAL_COUNT:
			return action.payload;
		default:
			return state;
	}
};

const nextPage = (state = 1, action) => {
	switch (action.type) {
		case SET_NEXT_PEOPLE_LINK:
			return action.payload;
		default:
			return state;
	}
};

const errors = (state = '', action) => {
	switch (action.type) {
		case SHOW_ERROR:
			return action.payload;
		case HIDE_ERROR:
			return '';
		default:
			return state;
	}
};

const success = (state = '', action) => {
	switch (action.type) {
		case SHOW_SUCCESS:
			return action.payload;
		case HIDE_SUCCESS:
			return '';
		default:
			return state;
	}
};

const reducers = combineReducers({
	isFetching,
	people,
	totalCount,
	nextPage,
	errors,
	success,
});

export default reducers;

// Action Creators

// People Actions
export const getPeople = createAction(PEOPLE_REQUEST);
export const getPeopleSuccess = createAction(PEOPLE_RECEIVE_SUCCESS);
export const getPeopleFailure = createAction(PEOPLE_RECEIVE_FAILURE);
export const setTotalCount = createAction(GET_TOTAL_COUNT);
export const setNextLink = createAction(SET_NEXT_PEOPLE_LINK);

// Notification Actions
export const showError = createAction(SHOW_ERROR);

export const showSuccess = createAction(SHOW_SUCCESS);

export const hideError = createAction(HIDE_ERROR);

export const hideSuccess = createAction(HIDE_SUCCESS);
