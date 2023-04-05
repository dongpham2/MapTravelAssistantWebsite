import React from "react";
import classNames from "classnames/bind";
import styles from "./InforFanpage.module.scss";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import OptionFanpage from "./OptionFanpage/OptionFanpage";

const cx = classNames.bind(styles);
export default function InforFanpage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <ProfileBanner />
        <OptionFanpage />
      </div>
    </div>
  );
}
