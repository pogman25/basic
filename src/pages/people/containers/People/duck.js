import { createAction, handleActions } from 'redux-actions';

// Actions

export const PEOPLE_REQUEST = 'people/PEOPLE_REQUEST';
export const PEOPLE_RECEIVE_SUCCESS = 'people/PEOPLE_RECEIVE_SUCCESS';
export const PEOPLE_RECEIVED = 'people/PEOPLE_RECEIVED';
export const GET_TOTAL_COUNT = 'people/GET_TOTAL_COUNT';
export const SET_NEXT_PEOPLE_LINK = 'people/SET_NEXT_PEOPLE_LINK';

// Action Creators

// People Actions
export const getPeople = createAction(PEOPLE_REQUEST);
export const getPeopleSuccess = createAction(PEOPLE_RECEIVE_SUCCESS);
export const getPeopleReceived = createAction(PEOPLE_RECEIVED);
export const setTotalCount = createAction(GET_TOTAL_COUNT);
export const setNextLink = createAction(SET_NEXT_PEOPLE_LINK);

// Reducers

const initialState = {
  isFetching: false,
  people: [],
  totalCount: 0,
  nextPage: 1,
};

const reducers = handleActions(
  {
    [PEOPLE_REQUEST]: state => ({ ...state, isFetching: true }),
    [PEOPLE_RECEIVED]: state => ({ ...state, isFetching: false }),
    [PEOPLE_RECEIVE_SUCCESS]: (state, action) => ({
      ...state,
      people: [...state.people, ...action.payload],
    }),
    [GET_TOTAL_COUNT]: (state, action) => ({ ...state, totalCount: action.payload }),
    [SET_NEXT_PEOPLE_LINK]: (state, action) => ({ ...state, nextPage: action.payload }),
  },
  initialState,
);

export default reducers;
