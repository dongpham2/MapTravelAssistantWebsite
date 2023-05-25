import { createContext, useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { auth } = useSelector((state) => state);
  const currentUser = {
    _id: auth.user.userID,
    email: auth.user.email,
    avatar: auth.user.avatar,
    fullname: auth.user.fullname,
  };
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  const chatReducer = (state, action) => {
    // console.log("payload", action.payload._id);
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser._id > action.payload._id
              ? currentUser._id + action.payload._id
              : action.payload._id + currentUser._id,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
