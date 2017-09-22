import React from 'react';
import { Form, Input,Icon, Button, notification,Checkbox } from 'antd';
import './login.less';
import axios from 'axios';
import createHistory from 'history/createHashHistory';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { loginSuccess } from '../../actions'
import { bindActionCreators } from 'redux';

const history = createHistory();

const FormItem = Form.Item;

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
	   	if (!err) {
		   	axios({
		   		url:'http://localhost:3000/book/login',
		   		method:'post',
		     	data:"username=" + values.userName + "&password=" + values.password,
		   		headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
		   	})
	   		.then(res => {
	   			if(res.data ==1){
            this.props.loginSuccess();
            this.props.history.push('/backstage'); 
	   			}
	   			else {
	   				this.openNotificationWithIcon('info');
	   			}
	   		})
			}
  	});
	}
  openNotificationWithIcon(type){
  	return notification[type]({
			message: '提示',
			description: '请输入正确的账号密码',
			duration: 6
  	})
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {loginIn,loginSuccess,text} = this.props;      
    return (
      <div id="loginpagewrap">
        <p>游客登录{text}</p>
        <div id="loginWrap">                
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
              	rules: [{ required: true, message: '请输入账号!' }],
              })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="账号" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
              	rules: [{ required: true, message: '请输入密码!' }],
              })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} name="password" type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
              <Checkbox>记住密码</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              <a>现在注册!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    loginIn:state.login.loginIn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginSuccess:bindActionCreators(loginSuccess,dispatch)
  }
}

let Login = Form.create()(LoginPage);
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);

