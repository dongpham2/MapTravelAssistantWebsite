import React from "react";
import classNames from "classnames/bind";
import styles from "./InforFanpage.module.scss";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import OptionFanpage from "../../../../layout/components/OptionFanpage/OptionFanpage";

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
