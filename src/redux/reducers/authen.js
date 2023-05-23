import { ACTION_GETALLUSERS } from "../actions/admin";
import { _ACTION_POSTARTICLE } from "../actions/article";
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
  post: {},
  // isLoading: false,
  listUsers: {},
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
    case _ACTION_POSTARTICLE:
      return {
        ...state,
        post: action.payload,
      };
    case ACTION_GETALLUSERS:
      return {
        ...state,
        listUsers: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
