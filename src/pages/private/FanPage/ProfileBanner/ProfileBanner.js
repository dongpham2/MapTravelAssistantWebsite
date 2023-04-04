import React from "react";
import images from "../../../../assets/images";
import classNames from "classnames/bind";
import styles from "./ProfileBanner.module.scss";

const cx = classNames.bind(styles);
export default function ProfileBanner() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("background")}
        src={images.profile_banner}
        alt="background-profile"
      />
      <div className={cx("user-avatar")}>
        <img className={cx("avatar-img")} src={images.avt} />
        <div className={cx("group-infor")}>
          <div className={cx("user-name")}>ABC restaurent</div>
          <div className={cx("follower")}>ABC restaurent</div>
          <div className={cx("start")}>start</div>
        </div>
      </div>
    </div>
  );
}
