export const Login_Success = "Login_Success";
export const Login_Out = "Login_Out";
export const loginSuccess = function () {
	return {
		type :'Login_Success'
  }
}
export const loginOut = function() {
	return {
		type:'Login_Out'
	}
}
