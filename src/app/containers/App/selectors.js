import { createSelector } from 'reselect';

const appReducer = store => store.people;

export const getError = createSelector(
	appReducer,
	i => i.errors
);
export const getSuccess = createSelector(
	appReducer,
	i => i.success
);

export const getPeopleFromState = createSelector(
	appReducer,
	i => i.people
);

export const getNextPage = createSelector(
	appReducer,
	i => i.nextPage
);

export const getTotalCountFromState = createSelector(
	appReducer,
	i => i.totalCount
);

export const getIsFetchingFromState = createSelector(
	appReducer,
	i => i.isFetching
);
