import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import Input from "../../../component/Input";

const cx = classNames.bind(styles);
export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("left")}>
        <Link>
          <img className={cx("logo")} src={images.logoM} alt="Logo" />
        </Link>
      </div>
      <div className={cx("right")}>
        <div className={cx("search")}>
          <Input
            leftIcon={<ion-icon name="search-outline"></ion-icon>}
            primary
            placeholder="Search..."
          />
        </div>
        <div className={cx("notification")}>
          <ion-icon
            name="notifications-outline"
            className={cx("icon")}
          ></ion-icon>
        </div>
        <div className={cx("avatar")}>
          <img className={cx("avatar-img")} src={images.avt} alt="avt" />
        </div>
      </div>
    </header>
  );
}
