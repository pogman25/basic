import { combineReducers } from 'redux';
import people from 'src/pages/people/containers/People/duck';
import notify from 'src/app/containers/App/duck';

const reducer = combineReducers({
	people,
	notify,
});

export default reducer;
