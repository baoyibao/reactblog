import React from 'react';

import { 
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Menu, Icon } from 'antd';

import App from '../container/App';
import Login from '../container/Login';
import Backstage from '../container/Backstage';
import Articles from '../container/Articles';
import Picture from '../container/Picture';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RouterMap = () => (
 <Router>
 	<Switch>
 		<Route path="/login" component={Login} />
 		<Route path="/backstage" component={Backstage}>
 		</Route>
 		<Route path="/" component={App} />
	</Switch>
</Router>
)

export default RouterMap
