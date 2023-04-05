import React from "react";
import classNames from "classnames/bind";
import styles from "./FanpageLayout.module.scss";
import Header from "../components/Header";
import OptionFanpage from "../../pages/private/FanPage/components/OptionFanpage/OptionFanpage";

const cx = classNames.bind(styles);
export default function FanpageLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <OptionFanpage />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
