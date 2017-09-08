import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
        const {text, onChangeText, onButtonClick} = this.props;  
        return (  
            <div>  
                <h1>{text}</h1>
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
    return { text: state.text }  
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
