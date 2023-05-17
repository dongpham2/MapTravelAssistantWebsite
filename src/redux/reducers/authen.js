import {
  ACTION_LOGOUT,
  _ACTION_LOADING,
  _ACTION_SIGNIN,
  __ACTION_SIGNUP,
} from "../actions/authen";
import { ACTION_CREATE_FANGPAGE } from "../actions/fanpage";

const initState = {
  auth: {},
  fanpage: {},
  // isLoading: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case _ACTION_SIGNIN:
      return {
        ...state,
        auth: action.payload,
        // idLoading: false,
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
    case _ACTION_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
