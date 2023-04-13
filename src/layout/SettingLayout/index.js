import React from "react";
import SettingOptions from "../components/SettingOptions/SettingOptions";
import classNames from "classnames/bind";
import styles from "./SettingLayout.module.scss";
import Header from "../components/Header";

const cx = classNames.bind(styles);

export default function SettingLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SettingOptions />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
