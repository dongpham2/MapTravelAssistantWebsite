import React from "react";
import classNames from "classnames/bind";
import styles from "./FanPage.module.scss";
import Content from "./Content";
import { ChatContextProvider } from "../Chat/context/ChatContext";
import ChatList from "../Chat/ChatList/ChatList";

const cx = classNames.bind(styles);
export default function FanPage() {
  return (
    <div className={cx("wrapper")}>
      <ChatContextProvider>
        <Content />
        <ChatList />
      </ChatContextProvider>
    </div>
  );
}
