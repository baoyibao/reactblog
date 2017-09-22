import { combineReducers } from 'redux';
import add from './add';
import login from './login.js';

export default combineReducers({
	login,
	add
})