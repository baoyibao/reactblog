import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
    componentDidMount() {
     console.log(this.props);
    }
	render() {
        const {text, onChangeText, onButtonClick,username} = this.props;  
        return (  
            <div>  
                <h1>{text}{username}</h1>
                <button onClick={onChangeText}>添加</button>  
                <button onClick={onButtonClick}>减少</button>  
            </div>
		)
	}
}

const changeTextAction = {  
    type:'CHANGE_TEXT'  
} 

const buttonClickAction = {
    type:'BUTTON_CLICK'  
}
  
function mapStateToProps(state) {  
    return { text: state.add.text }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
        onButtonClick:()=>dispatch(buttonClickAction),  
        onChangeText:()=>dispatch(changeTextAction)  
    }  
} 
export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Counter)
