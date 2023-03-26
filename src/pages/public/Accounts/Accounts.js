import React from "react";
import classNames from "classnames/bind";
import styles from "./Accounts.module.scss";
import Container from "./Container/Container";
import images from "../../../assets/images";

const cx = classNames.bind(styles);
export default function Accounts() {
  return (
    <div className={cx("wrapper")}>
      {/* {status === "pending" ? <Loading /> : ""} */}
      <Container />
      <img
        alt="background-map-travel"
        className={cx("background-img")}
        src={images.background_login}
      />
    </div>
  );
}
