import { _ACTION_SIGNIN, __ACTION_SIGNUP } from "../actions/authen";

const initState = {
  auth: {},
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
    default:
      return state;
  }
};

export default rootReducer;
