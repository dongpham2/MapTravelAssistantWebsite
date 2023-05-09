import { combineReducers } from "redux";
import { useReducer } from "react";
import articleReducer from "./article";
import userReducer from "./authen";

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

export default rootReducer;
