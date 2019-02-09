import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

// Actions

export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

// Action Creators

// Notification Actions

export const showError = createAction(SHOW_ERROR);

export const showSuccess = createAction(SHOW_SUCCESS);

export const hideError = createAction(HIDE_ERROR);

export const hideSuccess = createAction(HIDE_SUCCESS);

// Reducers

const errors = handleActions(
	{
		[SHOW_ERROR]: (state, action) => action.payload,
		[HIDE_ERROR]: () => '',
	},
	''
);

const success = handleActions(
	{
		[SHOW_SUCCESS]: (state, action) => action.payload,
		[HIDE_SUCCESS]: () => '',
	},
	''
);

const reducers = combineReducers({
	errors,
	success,
});

export default reducers;
