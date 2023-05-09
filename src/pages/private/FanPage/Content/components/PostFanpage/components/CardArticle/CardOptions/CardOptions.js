import React from "react";
import classNames from "classnames/bind";
import styles from "./CardOptions.module.scss";

const cx = classNames.bind(styles);
export default function CardOptions() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card-form")}>
        <div className={cx("card-item")}>
          <span className={cx("icon")}>
            <ion-icon name="create-outline"></ion-icon>
          </span>
          <div className={cx("text")}>Edit</div>
        </div>
        <div className={cx("card-item")}>
          <span className={cx("icon")}>
            <ion-icon name="trash-outline"></ion-icon>
          </span>
          <div className={cx("text")}>Delete</div>
        </div>
      </div>
    </div>
  );
}
