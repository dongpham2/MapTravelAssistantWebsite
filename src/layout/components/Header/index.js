import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import Input from "../../../component/Input";
import config from "../../../config";
import UserOptions from "./UserOptions";

const cx = classNames.bind(styles);
export default function Header() {
  const [isVisibleUserOptions, setIsVisibleUserOptions] = useState(false);

  // const toggleUserOptions = () => {
  //   setIsVisibleUserOptions(!isVisibleUserOptions);
  // };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("left")}>
        <Link to={config.routes.home}>
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
        {/* <div
          className={cx("avatar")}
          onClick={() => {
            toggleUserOptions();
          }}
        >
          <img className={cx("avatar-img")} src={images.avt} alt="avt" />
        </div>
        {isVisibleUserOptions ? <UserOptions /> : ""} */}
        <Link to={config.routes.accounts}>
          <Button login rounded>
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}
