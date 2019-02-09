import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';

// Actions

export const PEOPLE_REQUEST = 'app/PEOPLE_REQUEST';
export const PEOPLE_RECEIVE_SUCCESS = 'app/PEOPLE_RECEIVE_SUCCESS';
export const PEOPLE_RECEIVED = 'app/PEOPLE_RECEIVED';
export const GET_TOTAL_COUNT = 'app/GET_TOTAL_COUNT';
export const SET_NEXT_PEOPLE_LINK = 'app/SET_NEXT_PEOPLE_LINK';

// Reducers

const isFetching = (state = false, action) => {
	switch (action.type) {
		case PEOPLE_REQUEST:
			return true;
		case PEOPLE_RECEIVED:
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

const reducers = combineReducers({
	isFetching,
	people,
	totalCount,
	nextPage,
});

export default reducers;

// Action Creators

// People Actions
export const getPeople = createAction(PEOPLE_REQUEST);
export const getPeopleSuccess = createAction(PEOPLE_RECEIVE_SUCCESS);
export const getPeopleReceived = createAction(PEOPLE_RECEIVED);
export const setTotalCount = createAction(GET_TOTAL_COUNT);
export const setNextLink = createAction(SET_NEXT_PEOPLE_LINK);
