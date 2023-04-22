import React from "react";
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
}
