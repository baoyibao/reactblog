import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.css';
import './static/css/common.less';
import {Provider} from 'react-redux';
import {
	hashHistory
} from 'react-router-dom';

import {
	createStore
} from 'redux';

import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

import Routermap from './router/routerMap';
import store from './store';

render(
		<Provider store={store}>
			<Routermap history={hashHistory}/>
	 	</Provider>,
	document.getElementById('root')
 );
	