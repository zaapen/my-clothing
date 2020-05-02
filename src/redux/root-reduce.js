import { combineReducers } from 'redux';  //need to install redux

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});