import { combineReducers } from 'redux';
import { createAction, handleActions, handleAction } from 'redux-actions';

// Actions

export const PEOPLE_REQUEST = 'app/PEOPLE_REQUEST';
export const PEOPLE_RECEIVE_SUCCESS = 'app/PEOPLE_RECEIVE_SUCCESS';
export const PEOPLE_RECEIVED = 'app/PEOPLE_RECEIVED';
export const GET_TOTAL_COUNT = 'app/GET_TOTAL_COUNT';
export const SET_NEXT_PEOPLE_LINK = 'app/SET_NEXT_PEOPLE_LINK';

// Action Creators

// People Actions
export const getPeople = createAction(PEOPLE_REQUEST);
export const getPeopleSuccess = createAction(PEOPLE_RECEIVE_SUCCESS);
export const getPeopleReceived = createAction(PEOPLE_RECEIVED);
export const setTotalCount = createAction(GET_TOTAL_COUNT);
export const setNextLink = createAction(SET_NEXT_PEOPLE_LINK);

// Reducers

const isFetching = handleActions(
	{
		[PEOPLE_REQUEST]: () => true,
		[PEOPLE_RECEIVED]: () => false,
	},
	false
);

const people = handleActions(
	{
		[PEOPLE_RECEIVE_SUCCESS]: (state, action) => [...state, ...action.payload],
	},
	[]
);

const totalCount = handleAction(GET_TOTAL_COUNT, (state, action) => action.payload, 0);

const nextPage = handleAction(SET_NEXT_PEOPLE_LINK, (state, action) => action.payload, 1);

const reducers = combineReducers({
	isFetching,
	people,
	totalCount,
	nextPage,
});

export default reducers;
