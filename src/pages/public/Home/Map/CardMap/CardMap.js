import React from "react";
import classNames from "classnames/bind";
import styles from "./CardMap.module.scss";
import images from "src/assets/images";
import { FaStar } from "react-icons/fa";

const cx = classNames.bind(styles);
export default function CardMap() {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Nhà hàng jun je</h3>
      <div className={cx("photo")}>
        <img src={images.banner_default} className={cx("img-banner")} />
      </div>
      <div className={cx("star")}>
        {[...Array(5)].map((stars, index) => {
          return <FaStar size={20} color="#ffc107" />;
        })}
      </div>
    </div>
  );
}
