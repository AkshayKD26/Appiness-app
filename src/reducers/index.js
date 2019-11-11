import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import listReducer from './listReducer';
export default combineReducers({
  errors: errorReducer,
  list: listReducer,
});
