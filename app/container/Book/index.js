import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Book extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			posts: []
		}
	}
	componentDidMount() {
		axios.get('http://localhost:3000/book')
			.then(res => {
				const posts = res.data.data;
				this.setState({posts});
			})
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.posts.map((data,index) => 
						<li className='text-center' key={index}>
							<p>账号:{data.username}</p>
							<p>密码:{data.password}</p>
						</li>
						)}
				</ul>
			</div>
		)
	}
}
export default Book
