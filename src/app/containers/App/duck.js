import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';

// Actions

export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

export const GET_PEOPLE = 'app/GET_PEOPLE';

// Reducers

const people = (state = [], actions) => {
	switch (actions.type) {
		case GET_PEOPLE:
			return state;
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
	people,
	errors,
	success,
});

export default reducers;

// Action Creators

export const getPeople = pyaload => ({
	type: GET_PEOPLE,
	pyaload,
});

export const showError = createAction(SHOW_ERROR);

export const showSuccess = createAction(SHOW_SUCCESS);

export const hideError = createAction(HIDE_ERROR);

export const hideSuccess = createAction(HIDE_SUCCESS);
