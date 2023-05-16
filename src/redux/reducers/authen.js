import {
  ACTION_LOGOUT,
  _ACTION_SIGNIN,
  __ACTION_SIGNUP,
} from "../actions/authen";
import { ACTION_CREATE_FANGPAGE } from "../actions/fanpage";

const initState = {
  auth: {},
  fanpage: {},
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case _ACTION_SIGNIN:
      return {
        ...state,
        auth: action.payload,
      };
    case __ACTION_SIGNUP:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTION_LOGOUT:
      return {
        ...state,
        auth: {},
      };
    case ACTION_CREATE_FANGPAGE:
      return {
        ...state,
        fanpage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
