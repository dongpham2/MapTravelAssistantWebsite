import React from "react";
import styles from "./ProfileDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function ProfileDetail() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>Profile</div>
    </div>
  );
}
