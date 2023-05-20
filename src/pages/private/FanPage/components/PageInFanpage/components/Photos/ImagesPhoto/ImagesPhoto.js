import React from "react";
import classNames from "classnames/bind";
import styles from "./ImagesPhoto.module.scss";
import images from "src/assets/images";

const cx = classNames.bind(styles);

export default function ImagesPhoto(data) {
  return (
    <div className={cx("wrapper")}>
      <img src={data?.url} alt="" className={cx("img")} />
    </div>
  );
}
