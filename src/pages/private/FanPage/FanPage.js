import React from "react";
<<<<<<< HEAD
import classNames from "classnames/bind";
import styles from "./FanPage.module.scss";
import Content from "./Content";

const cx = classNames.bind(styles);
export default function FanPage() {
  return (
    <div className={cx("wrapper")}>
      <Content />
    </div>
  );
=======
import ChatBox from "../Chat/ChatBox"
import ChatList from "../Chat/ChatList/ChatList";
import { ChatContext, ChatContextProvider } from "../Chat/context/ChatContext";
export default function FanPage() {
  return <div>This is fanpage
    <ChatContextProvider>
      <ChatList/>
    </ChatContextProvider>
  </div>;
>>>>>>> origin/han
}
