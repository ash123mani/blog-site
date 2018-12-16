import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { activeTabReducer } from './activeTabReducer';

export default combineReducers({
  loginReducer,
  userReducer,
  errorReducer,
  activeTabReducer
});
