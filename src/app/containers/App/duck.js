import { createAction, handleActions } from 'redux-actions';

// Actions

export const SHOW_ERROR = 'app/SHOW_ERROR';
export const SHOW_SUCCESS = 'app/SHOW_SUCCESS';
export const HIDE_ERROR = 'app/HIDE_ERROR';
export const HIDE_SUCCESS = 'app/HIDE_SUCCESS';

// Action Creators

// Notification Actions

export const showError = createAction(SHOW_ERROR);
export const showSuccess = createAction(SHOW_SUCCESS);
export const hideError = createAction(HIDE_ERROR);
export const hideSuccess = createAction(HIDE_SUCCESS);

// Reducers

const initialState = {
  errors: '',
  success: '',
};

const reducers = handleActions(
  {
    [SHOW_ERROR]: (state, action) => ({ ...state, errors: action.payload }),
    [HIDE_ERROR]: state => ({ ...state, errors: '' }),
    [SHOW_SUCCESS]: (state, action) => ({ ...state, success: action.payload }),
    [HIDE_SUCCESS]: state => ({ ...state, success: '' }),
  },
  initialState,
);

export default reducers;
