import React from 'react'
import {
  Link
} from 'react-router-dom';
import { Menu, Icon,Button } from 'antd';
import {connect} from 'react-redux';
import './leftmenu.less';
import { loginSuccess } from '../../actions'
import { bindActionCreators } from 'redux';

import createHistory from 'history/createHashHistory';

const history = createHistory();

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class leftmenu extends React.Component {
  constructor(props, context) {
		super(props, context);
    this.state = {
      current: '1',
      openKeys: [],
    };
    props:props;
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.getAncestorKeys = this.getAncestorKeys.bind(this);
	}
  handleClick(e) {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys(key) {
    const map = {
      sub2: ['sub1'],
    };
    return map[key] || [];
  }
  joinBack() {
    const loginIn = this.props.loginIn;
    if(!loginIn) {
      console.log(this.props)
      this.props.history.push('/login');
    }else{
      this.props.history.push('/backstage');
    }
  }
  render() {
    const { history,joinBack,loginIn} = this.props
    return (
      <div className="leftMenu l-height-100">
        <div className="left-headbg"></div>
        <img src={require('../../static/img/logo.png')} width="70" className="logo text-center"/>
        <Menu
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
          style={{width: 240}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme=""
        >
          <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="book" /><span>成长记录</span></span>}>
            <Menu.Item key="2"><Link to="/book">成长记录</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="user" /><span>关于我</span></span>}>
            <Menu.Item key="3"><Link to="/about">关于我</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="camera-o" />相册</span>}>
            <Menu.Item key="4"><Link to="/camera">相册</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="folder-add" />留言板</span>}>
            <Menu.Item key="5"><Link to="/message">留言板</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <div className="author text-center l-width-100">
          <p>Copyright © lw</p>
          <Button onClick={this.joinBack.bind(this)}>后台管理</Button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    loginIn:state.login.loginIn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(leftmenu);
