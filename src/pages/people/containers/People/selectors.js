import { createSelector } from 'reselect';

const appReducer = store => store.people;

export const getError = createSelector(
  appReducer,
  i => i.errors,
);
export const getSuccess = createSelector(
  appReducer,
  i => i.success,
);

const peopleByNames = createSelector(
  appReducer,
  i => i.peopleByNames,
);

const peopleNames = createSelector(
  appReducer,
  i => i.peopleNames,
);

export const getPeopleFromState = createSelector(
  peopleNames,
  peopleByNames,
  (names, byNames) => names.map(i => byNames[i]),
);

export const getNextPage = createSelector(
  appReducer,
  i => i.nextPage,
);

export const getTotalCountFromState = createSelector(
  appReducer,
  i => i.totalCount,
);

export const getIsFetchingFromState = createSelector(
  appReducer,
  i => i.isFetching,
);
