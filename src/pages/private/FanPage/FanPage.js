import React from "react";
import ChatBox from "../Chat/ChatBox"
import ChatList from "../Chat/ChatList/ChatList";
import { ChatContext, ChatContextProvider } from "../Chat/context/ChatContext";
export default function FanPage() {
  return <div>This is fanpage
    <ChatContextProvider>
      <ChatList/>
    </ChatContextProvider>
  </div>;
}
