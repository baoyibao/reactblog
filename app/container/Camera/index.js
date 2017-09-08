import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

class Camera extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				<h1>camera</h1>
			</div>
		)
	}
}
export default Camera
