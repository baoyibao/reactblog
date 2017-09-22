import React from 'react';
import axios from 'axios';
import { Table, Icon, Button,Modal } from 'antd';
import { Link} from 'react-router-dom';
import './index.less'
import { Input } from 'antd';

import editor from '../../component/draft'

const Search = Input.Search;

class Articles extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			tDate: [],
			loading:false,
			visible:false,
			text:''
		}
		this.showModal = this.showModal.bind(this);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.deleteArticles = this.deleteArticles.bind(this);
	}
	showModal() {
		this.setState({
			visible:true,
		})
	}
	deleteArticles() {
		console.log('aaa')
	}
	handleOk() {
		this.setState({loading:true});
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
	}
	handleCancel() {
		this.setState({visible:false});
	}
	componentDidMount () {
		const data = []
		axios({
			url:"http://localhost:3000/list",
			method:"get",
		  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then(res => {
			const dataSource = res.data.data;
			const dataL = dataSource.length;
			for(var i=0; i<dataL; i++) {
				data.push({
					key: i,
					index:i+1,
					abstracts:dataSource[i].abstracts,
					title:dataSource[i].title,
					time:'2017-6-7'	
				})
			}
			this.setState({
        tDate: data
      })
		})
	}
	addArticles() {
		this.props.history.push('/addart');
	}
	editarticles() {
		console.log('11')
	}
	deletearticles() {
		console.log('22')
	}
	render() {
		const {visible,loading} = this.state;
		const deleteArticles = this.deleteArticles;
		const columns = [
			{
				title: '序号',
				width: '20%',
				dataIndex: 'index'
			},
			{
				title: '标题',
				width: '20%',
				dataIndex: 'title',
			},
			{
				title: '备注',
				width: '20%',
				dataIndex: 'abstracts'
			},
			{
				title: '创建日期',
				width: '20%',
				dataIndex: 'time',
			},
			{
				title: '操作',
				width: '20%',
				dataIndex: 'operate',
				render:(text,record) => (
				<span>
					<a onClick={this.showModal.bind(this,text)}><Icon type="edit" /></a>
					<span className="ant-divider" />
					<a onClick={this.deletearticles.bind(this,text)}><Icon type="delete" /></a>
				</span>
					)
      }]
		return (
			<div className="articles-table">
				<div className="table-head">
					<h4 className="animated">文章管理</h4>
					  <Search
    					placeholder="请输入需要需要的文章"
    					style={{ width: 200 }}
    					onSearch={value => console.log(value)}
  					/>
				</div>
				<Table columns={columns} dataSource={this.state.tDate} />
				<Modal
          visible={visible}
          title="文章编辑"
          width= "80%"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
				<editor />
        </Modal>
			</div>
		)
	}
}
export default Articles
