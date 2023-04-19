import { _ACTION_LOGIN, __ACTION_SIGNUP } from "../actions/authen";

const initState = {
  auth: {},
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "profileFanpage/updateProfile":
      return {
        ...state,
      };
    case _ACTION_LOGIN:
      return {
        ...state,
        auth: action.payload,
      };
    case __ACTION_SIGNUP:
      return {
        ...state,
        auth: action.payload,
      };
    default:
  }
};

export default rootReducer;
