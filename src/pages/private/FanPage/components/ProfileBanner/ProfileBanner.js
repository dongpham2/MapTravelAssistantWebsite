import React, { useState } from "react";
import images from "../../../../../assets/images";
import classNames from "classnames/bind";
import styles from "./ProfileBanner.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

export default function ProfileBanner() {
  const fanpage = useSelector((state) => state.fanpage);
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("background")}
        src={images.profile_banner}
        alt="background-profile"
      />
      <div className={cx("user-avatar")}>
        <img className={cx("avatar-img")} src={fanpage.avatar} />
        <div className={cx("group-infor")}>
          <div className={cx("user-name")}>{fanpage.name}</div>
          {/* <div className={cx("follower")}>ABC restaurent</div> */}
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
