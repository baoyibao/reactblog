import {
	Login_Success,
    Login_Out
} from '../actions';

export default function login(state = { loginIn:false},action) {
    const loginIn = state.loginIn;
    switch (action.type) {
        case 'Login_Success':
            return {
                loginIn:true
            }
        case 'Login_Out':
            return {
                loginIn:false
            }
        default: 
            return state;
    }
}