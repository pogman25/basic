import { createSelector } from 'reselect';

const appReducer = store => store.app;

export const getError = createSelector(
	appReducer,
	i => i.errors
);
export const getSuccess = createSelector(
	appReducer,
	i => i.success
);
