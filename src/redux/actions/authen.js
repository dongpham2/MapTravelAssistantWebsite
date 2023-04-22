import { AuthService } from "src/service/authService";

export const _ACTION_SIGNIN = "_ACTION_SIGNIN";
export const actionSignin = (user) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.signin(user);
    if (status === 200) {
      dispatch({
        type: _ACTION_SIGNIN,
        payload: data,
      });
    }
  };
};
// export default actionLogin;

export const __ACTION_SIGNUP = "__ACTION_SIGNUP";
export const actionSignup = (user) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.signup(user);
    if (status === 200) {
      dispatch({
        type: __ACTION_SIGNUP,
        payload: data,
      });
    }
  };
};
