import { toast } from "react-toastify";
import Loading from "src/component/Loading/Loading";
import { AuthService } from "src/service/authService";

export const _ACTION_SIGNIN = "_ACTION_SIGNIN";
export const _ACTION_LOADING = "_ACTION_LOADING";

export const actionSignin = (user, history) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.signin(user);
    const newData = { ...data, role: "user" };
    if (status === 200) {
      dispatch({
        type: _ACTION_SIGNIN,
        payload: data,
      });
      redirect(newData.role, history);
    } else {
      toast.error("Login failed");
    }
  };
};

export const __ACTION_SIGNUP = "__ACTION_SIGNUP";
export const actionSignup = (user) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.signup(user);
    if (status === 201) {
      dispatch({
        type: __ACTION_SIGNUP,
        payload: data,
      });
      toast.success("login successful");
    } else {
      toast.error("Login failed");
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
    toast.success("Logout successful");
    dispatch({
      type: ACTION_LOGOUT,
    });
  };
};
