import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.scss";
import images from "src/assets/images";
import config from "src/config";
import { useState } from "react";

const cx = classNames.bind(styles);

const sidebarMenu = [
  {
    title: "Manage Users",
    to: config.routes.admin,
    role: ["admin"],
    icon: <ion-icon name="people-sharp"></ion-icon>,
  },
  {
    title: "Notifications",
    to: config.routes.notice,
    role: ["admin"],
    icon: <ion-icon name="notifications-outline"></ion-icon>,
  },
  {
    title: "History",
    to: config.routes.history,
    role: ["admin"],
    icon: <ion-icon name="hourglass-outline"></ion-icon>,
  },
];

function Sidebar({ role }) {
  const [isVisibleUserOptions, setIsVisibleUserOptions] = useState(false);

  const toggleUserOptions = () => {
    setIsVisibleUserOptions(!isVisibleUserOptions);
  };
  const renderMenu = () => {
    return sidebarMenu.map((option, index) => {
      const roleMenu = option.role.some((item) => item != role);
      if (roleMenu) {
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
              <span className={cx("sidebar-item-link-icon")}>
                {option.icon}
              </span>
              <span>{option.title}</span>
            </NavLink>
          </li>
        );
      }
      return "";
    });
  };

  return (
    <div className={cx("wrapper")}>
      <ul className={cx("sidebar-list")}>{renderMenu()}</ul>
    </div>
  );
}

export default Sidebar;
