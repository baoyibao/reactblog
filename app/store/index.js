import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';
import promise from 'redux-promise';
const logger = createLogger();
const store = createStore(
	reducer,
	applyMiddleware(thunk,promise,logger)
);

export default store