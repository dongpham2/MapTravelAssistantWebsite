import { createContext, useEffect, useReducer, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import {auth } from "../firebase"

export const ChatContext = createContext()

export const ChatContextProvider = ({children})=>{
    const currentUser = {
        uid : "IrzDfxSJZQO1cn4zDd1zZCh6DZ42", 
        email: "han1@gmail.com",
        photoURL: "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/54/2022/02/Image-for-Rejoining-Paris-Agreement.jpeg",
        displayName: "Han1"
    } 
    const INITIAL_STATE = {
        chatId: "null",
        user:{}
    }
    const chatReducer = (state, action) =>{
        switch(action.type){
            case "CHANGE_USER":
                return{
                    user: action.payload,
                    chatId: currentUser.uid > action.payload.uid 
                    ? currentUser.uid + action.payload.uid 
                    : action.payload.uid + currentUser.uid,
                }
                default:
                    return state;
        }
    };
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
            {children}
        </ChatContext.Provider>
    );
}