import { AuthService } from "src/service/authService";

export const _ACTION_LOGIN = "_ACTION_LOGIN";
export const actionLogin = (user) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.login(user);
    if (status === 200) {
      dispatch({
        type: _ACTION_LOGIN,
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
