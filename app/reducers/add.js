export default function counter(state = { text: 0},action) {
    const text = state.text
    switch (action.type) {  
        case 'CHANGE_TEXT': 
            return {  
                text: text + 1
            }  
        case 'BUTTON_CLICK':  
            return {  
                text: text - 1
            }  
        default:  
            return state;  
    }  
}
