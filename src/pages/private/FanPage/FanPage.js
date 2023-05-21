import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FanPage.module.scss";
import Content from "./Content";
import { ChatContextProvider } from "../Chat/context/ChatContext";
// import ChatList from "../Chat/ChatList/ChatList";
import OptionFanpage from "src/layout/components/OptionFanpage/OptionFanpage";

const cx = classNames.bind(styles);
export default function FanPage() {
  const [openMess, setOpenMess] = useState(false);
  const openMessage = () => {
    setOpenMess(true);
  };

  return (
    <div className={cx("wrapper")}>
      <ChatContextProvider>
        <Content />
        {/* <ChatList /> */}
      </ChatContextProvider>
    </div>
  );
}
