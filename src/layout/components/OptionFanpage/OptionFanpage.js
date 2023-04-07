import React from "react";
import classNames from "classnames/bind";
import styles from "./OptionFanpage.module.scss";
import { NavLink } from "react-router-dom";
import config from "../../../config";
import Button from "../../../component/Button";

const cx = classNames.bind(styles);

const NavOptions = [
  {
    title: "Posts",
    to: config.routes.fanpage,
    // role: ["owner"],
  },
  {
    title: "Photos",
    to: config.routes.photos,
    // role: ["owner"],
  },
  {
    title: "Videos",
    to: config.routes.videos,
    // role: ["owner"],
  },
  {
    title: "More",
    to: config.routes.more,
    // role: ["owner"],
  },
];

export default function OptionFanpage() {
  const renderOptions = () => {
    // const roleMenu = option.role.some((item) => item === role);
    // if (option) {
    // }
    return NavOptions.map((option, index) => {
      return (
        <li key={index}>
          <NavLink
            className={({ isActive }) => {
              isActive
                ? cx("navbar-item-link", "active")
                : cx("navbar-item-link");
            }}
            to={option.to}
          >
            <span className={cx("navbar-title")}>{option.title}</span>
          </NavLink>
        </li>
      );
    });
  };
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("navbar-list")}>{renderOptions()}</ul>
      <ul className={cx("navbar-option")}>
        <div className={cx("dot-option")}>...</div>
        <Button
          primary
          leftIcon={<ion-icon name="chatbox-ellipses-outline"></ion-icon>}
        >
          Message
        </Button>
      </ul>
    </div>
  );
}
