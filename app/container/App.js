import React,{Component} from 'react';
import LeftMenu from './../component/leftmenu';
import {Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import { CSSTransitionGroup } from 'react-transition-group'

import About from './About';
import Home from './Home';
import Book from './Book';
import Message from './Message';
import Camera from './Camera';
import {Link} from 'react-router-dom';

import {
  bindActionCreators
} from 'redux';

import { loginOut } from '../actions';

import { Menu, Dropdown, Icon } from 'antd';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
  }
  leave() {
    this.props.loginOut();
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <div onClick={this.leave.bind(this)}>退出账户</div>
        </Menu.Item>
      </Menu>
    );
    const { props } = this.props;
    let history = this.props.history;
    return (
      <div>
        <LeftMenu history={history} />
        <div className="rightWrap">
          <div className="rightHead">
            {
              this.props.loginIn
              ?<div>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#">
                    <Icon type="user" style={{ fontSize: 24, color: '#fff' }} />
                    <Icon type="down" style={{ fontSize: 12, color: '#fff' }} />
                  </a>
                </Dropdown>
              </div>
              :<ul className="clearfix">
                <li><Link to="/login">登录</Link></li>
                <li><Link to="">注册</Link></li>
              </ul>
            }
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
function mapStateToProps(state){
  return {
    loginIn:state.login.loginIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginOut: bindActionCreators(loginOut, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);