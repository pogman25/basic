import { combineReducers } from 'redux';
import people from '../../app/containers/App/duck';
import notify from '../../app/containers/Notification/duck';

const reducer = combineReducers({
	people,
	notify,
});

export default reducer;
