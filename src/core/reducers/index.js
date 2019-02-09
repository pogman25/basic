import { combineReducers } from 'redux';
import app from '../../app/containers/App/duck';

const reducer = combineReducers({
  app,
});

export default reducer;
