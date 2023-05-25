import classNames from "classnames/bind";
import styles from "./openChat.module.scss";
import { useState } from "react";
import ChatList from "../ChatList/ChatList";
const cx = classNames.bind(styles);

export default function ChatIcon() {
  const [showChat, setShowChat] = useState(false);
  const handleOpen = () => {
    setShowChat(!showChat);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon")} onClick={handleOpen}>
        <ion-icon name="create-outline"></ion-icon>
      </div>
      {showChat && <ChatList />}
      {/* <ChatList /> */}
    </div>
  );
}
