import React from 'react'
import {
  Link
} from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class backmenu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="leftMenu l-height-100">
        <div className="left-headbg">后台管理</div>
        <img src={require('../../static/img/logo.png')} width="70" className="logo text-center"/>
        <Menu
          style={{width: 240}}
          defaultSelectedKeys={['1']}
          mode="inline"
          theme=""
        >
          <Menu.Item key="1"><Link to="/backstage">流量图表</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/backstage/articles">文章管理</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/backstage/picture">图片管理</Link></Menu.Item>
        </Menu>
        <div className="author text-center l-width-100">
          <p>Copyright © lw</p>
          <Link to="/">回到博客</Link>
        </div>
      </div>
    )
  }
}
export default backmenu
