import { AuthService } from "src/service/authService";

export const _ACTION_SIGNIN = "_ACTION_SIGNIN";

export const actionSignin = (user, history) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.signin(user);
    console.log(data);
    const newData = { ...data, role: "user" };
    if (status === 200) {
      dispatch({
        type: _ACTION_SIGNIN,
        payload: data,
      });
      redirect(newData.role, history);
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

const redirect = (role, history) => {
  if (role === "admin") history("/admin");
  else history("/");
};

export const ACTION_LOGOUT = "ACTION_LOGOUT";
export const LogoutAction = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_LOGOUT,
    });
  };
};
