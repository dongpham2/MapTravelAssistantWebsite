import React from "react";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import classNames from "classnames/bind";
import styles from "./FanPage.module.scss";

const cx = classNames.bind(styles);
export default function FanPage() {
  return (
    <div className={cx("wrapper")}>
      <ProfileBanner />
    </div>
  );
}
