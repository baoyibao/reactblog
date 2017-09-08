import React from 'react';
import axios from 'axios';
import './home.less';
class Home extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lists:[]
		}
	}
	componentDidMount() {
		axios.get('http://localhost:3000/list')
		.then(res => {
			const lists = res.data.data;
			this.setState({lists});
		})
	}
	render() {
		return (
			<div className="index-list">
				<ul>
					{this.state.lists.map((data,index) => 
						<li className='bgcolor-fff' key={index}>
							<h2>{data.title}</h2>
							<p>{data.abstracts}</p>
						</li>
						)}
				</ul>
			</div>
		)
	}
}
export default Home
