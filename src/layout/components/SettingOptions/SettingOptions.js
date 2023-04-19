import React from "react";
import classNames from "classnames/bind";
import styles from "./SettingOptions.module.scss";
import { NavLink } from "react-router-dom";
import config from "../../../config";

const cx = classNames.bind(styles);

const sideOptions = [
  {
    title: "Profile",
    to: config.routes.profile,
    // role: ["owner"],
    icon: <ion-icon name="person-outline"></ion-icon>,
  },
  {
    title: "Your Fanpage",
    to: config.routes.createFanpage,
    // role: ["owner"],
    icon: <ion-icon name="logo-mastodon"></ion-icon>,
  },
  {
    title: "Change Passsword",
    to: config.routes.changePassword,
    // role: ["owner"],
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
  },
  {
    title: "Notifications",
    to: config.routes.notification,
    // role: ["owner"],
    icon: <ion-icon name="notifications-outline"></ion-icon>,
  },
];

export default function SettingOptions() {
  const renderMenu = () => {
    return sideOptions.map((option, index) => {
      //   const roleMenu = option.role.some((item) => item === role);
      //   if (roleMenu) {
      return (
        <li key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? cx("sidebar-item-link", "active")
                : cx("sidebar-item-link")
            }
            to={option.to}
          >
            <span className={cx("sidebar-item-link-icon")}>{option.icon}</span>
            <span>{option.title}</span>
          </NavLink>
        </li>
      );
      //   }
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Setting</h3>
      <ul className={cx("sidebar-list")}>{renderMenu()}</ul>
    </div>
  );
}
