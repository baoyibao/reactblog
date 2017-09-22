
import React, { Component, PropTypes } from 'react';
import MyEditor from '../../component/draft'
import { connect } from 'redux';
import { Input } from 'antd';
import './index.less';

import marked from 'marked';

var rendererMD = new marked.Renderer();
  marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

class addarticles extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state={
			value:''
		}
	}
	changetextarea(_event) {
        let event = _event
        let elem = event.target
        let value = elem.value
        if(elem.attributes.twoWay != null){
            let attr = elem.attributes.twoWay.value
            this.setState(state => state[attr] = value)
        }
    }
	render() {
		return (
			<div>
				<div className="articles-table">
					<div className="table-head">
						<h2>添加文章</h2>	
						<ul>
							<li>
								<label htmlFor="title" className="margin-right-10">标题:</label>
								<Input 
									id="title"
								/>	
							</li>
							<li>
								<label htmlFor="abstracts" className="margin-right-10">摘要:</label>
								<Input 
									id="abstracts"
								/>	
							</li>
						</ul>
					</div>
					<div className="content clearfix">
						<h4>内容</h4>
						<div className="content-left">
							<textarea onInput={this.changetextarea.bind(this)} is twoWay={'value'}/>
						</div>
						<div className="content-right">
							{marked(this.state.value)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default addarticles