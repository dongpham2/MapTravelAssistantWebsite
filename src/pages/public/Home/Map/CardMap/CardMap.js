import React from "react";
import classNames from "classnames/bind";
import styles from "./CardMap.module.scss";
import images from "src/assets/images";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);
export default function CardMap(props) {
  const { position, data } = props;
  console.log("check data", data);
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>{data.name}</h3>
      <div className={cx("photo")}>
        <img src={data.banner} className={cx("img-banner")} />
      </div>
      <div className={cx("star")}>
        {[...Array(5)].map((stars, index) => {
          return <FaStar size={20} color="#ffc107" />;
        })}
      </div>
    </div>
  );
}
