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

const initialState = {
	isFetching: false,
	people: [],
	totalCount: 0,
	nextPage: 1,
	errors: '',
	success: '',
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case PEOPLE_REQUEST:
			return { ...state, isFetching: true };
		case PEOPLE_RECEIVE_SUCCESS:
			return {
				...state,
				people: [...state.people, ...action.payload],
				isFetching: false,
			};
		case PEOPLE_RECEIVE_FAILURE:
			return { ...state, isFetching: false };
		case GET_TOTAL_COUNT:
			return { ...state, totalCount: action.payload };
		case SET_NEXT_PEOPLE_LINK:
			return { ...state, nextPage: action.payload };
		case SHOW_ERROR:
			return { ...state, error: action.payload };
		case HIDE_ERROR:
			return { ...state, error: '' };
		case SHOW_SUCCESS:
			return { ...state, success: action.payload };
		case HIDE_SUCCESS:
			return { ...state, success: '' };
		default:
			return state;
	}
};

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
