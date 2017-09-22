import React from 'react';
import axios from 'axios';
import './home.less';
import { Pagination } from 'antd';
class Home extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lists:[],
			listpage:[],
			pageSize:4,
			page:1
		}
	}
	componentDidMount() {
		this.getdata(1);
	}
	getdata(currentPage) {
		axios.get('http://localhost:3000/list')
		.then(res => {
			const lists = res.data.data;
			this.setState({
				page:currentPage,
				lists,
				listpage:lists.slice((currentPage-1)*4,currentPage*4)
			});
		})
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<div className="index-list">
					<ul>
						{this.state.listpage.map((data,index) => 
							<li className='bgcolor-fff' key={index}>
								<h2>{data.title}</h2>
								<p>{data.abstracts}</p>
							</li>
							)}
					</ul>
				</div>
				<Pagination className="float-right margin-right-20"
					current={this.state.page}
					onChange={(page,pageSize) =>{this.getdata(page)}}
					pageSize={4}
					total={this.state.lists.length}
				/>
			</div>
		)
	}
}
export default Home

