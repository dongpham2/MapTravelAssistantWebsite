import React, { useState } from "react";
import images from "../../../../../assets/images";
import classNames from "classnames/bind";
import styles from "./ProfileBanner.module.scss";
import { FaStar } from "react-icons/fa";

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
          <div className={cx("start")}>
            {[...Array(5)].map((stars, index) => {
              return <FaStar size={30} color="#ffc107" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
