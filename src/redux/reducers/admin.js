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
  listUsers: {},
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_GETALLUSERS:
      return {
        ...state,
        listUsers: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
