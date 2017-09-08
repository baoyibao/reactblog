import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Backmenu from '../../component/backmenu';

import Backindex from '../../container/Backindex';
import Articles from '../../container/Articles';
import Picture from '../../container/Picture';
class backstage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				<Backmenu />
				<div className="rightWrap">
					<Route path="/backstage" exact component={Backindex}/>
					<Route path="/backstage/articles" component={Articles} />
        	<Route path="/backstage/picture" component={Picture} />
				</div>
			</div>
		)
	}
}
export default backstage
