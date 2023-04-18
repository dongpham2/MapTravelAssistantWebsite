import React from "react";
import classNames from "classnames/bind";
import styles from "./UserComments.module.scss";
import images from "src/assets/images";

const cx = classNames.bind(styles);
export default function UserComments() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("user-infor")}>
        <img src={images.avt_default} className={cx("img-other")} />
        <div className={cx("comments-line")}>
          <div className={cx("username")}>Hân Nguyễn</div>
          <div className={cx("text-review")}>
            This food is so good. I want to eat until your restaurent goes
            bankrupt
          </div>
        </div>
      </div>
    </div>
  );
}
