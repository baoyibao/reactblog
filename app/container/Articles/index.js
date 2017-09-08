import React from 'react';
import axios from 'axios';
class Articles extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount () {
		axios({
			url:"http://localhost:3000/list",
			method:"get",
		  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then(res => {
			console.log(res)
		})
	}
	render() {
		return (
			<div>
				<h1>articles</h1>
			</div>
		)
	}
}
export default Articles
