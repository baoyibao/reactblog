import React,{Component} from 'react';
import LeftMenu from './../component/leftmenu';
import {Route,Switch} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Book from './Book';
import Message from './Message';
import Camera from './Camera';
import {Link} from 'react-router-dom'
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <LeftMenu />
        <div className="rightWrap">
          <div className="rightHead">
            <ul className="clearfix">
              <li><Link to="/login">登录</Link></li>
              <li><Link to="">注册</Link></li>
            </ul>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/book" component={Book} />
            <Route path="/message" component={Message} />
            <Route path="/camera" component={Camera} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App