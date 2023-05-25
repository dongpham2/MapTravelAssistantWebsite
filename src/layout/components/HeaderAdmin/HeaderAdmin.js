import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./HeaderAdmin.module.scss";
import config from "src/config";
import Button from "src/component/Button";
import { Link } from "react-router-dom";
import images from "src/assets/images";
import UserOptions from "../Header/UserOptions";
const cx = classNames.bind(styles);
export default function HeaderAdmin() {
  const [isVisibleUserOptions, setIsVisibleUserOptions] = useState(false);

  //   console.log("auth", auth);
  const toggleUserOptions = () => {
    setIsVisibleUserOptions(!isVisibleUserOptions);
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("left")}>
        <img className={cx("logo")} src={images.logoM} alt="Logo" />
      </div>
    </header>
  );
}
