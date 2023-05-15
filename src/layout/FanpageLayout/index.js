import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FanpageLayout.module.scss";
import Header from "../components/Header";
import InforFanpage from "../../pages/private/FanPage/components/InforFanpage";

const cx = classNames.bind(styles);
export default function FanpageLayout({ children }) {
  const [openMessage, setOpenMessage] = useState(false);
  const openChat = () =>{
    setOpenMessage(true);
  }
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <InforFanpage/>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
