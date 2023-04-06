import React from "react";
import classNames from "classnames/bind";
import styles from "./FanPage.module.scss";
import InforFanpage from "./components/InforFanpage";
import Content from "./Content";

const cx = classNames.bind(styles);
export default function FanPage() {
  return (
    <div className={cx("wrapper")}>
      <InforFanpage />
      <Content />
    </div>
  );
}
