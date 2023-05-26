import classNames from "classnames/bind";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

import styles from "./SideBar.module.scss";
import images from "src/assets/images";
import config from "src/config";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "src/redux/actions/authen";

const cx = classNames.bind(styles);

const sidebarMenu = [
  {
    title: "Manage Users",
    to: config.routes.admin,
    role: ["admin"],
    icon: <ion-icon name="people-sharp"></ion-icon>,
  },
  {
    title: "Statitis",
    to: config.routes.statitic,
    role: ["admin"],
    icon: <ion-icon name="stats-chart-sharp"></ion-icon>,
  },
  {
    title: "Notifications",
    to: config.routes.notice,
    role: ["admin"],
    icon: <ion-icon name="notifications-outline"></ion-icon>,
  },

  {
    title: "Manane Fanpage",
    to: config.routes.history,
    role: ["admin"],
    icon: <ion-icon name="hourglass-outline"></ion-icon>,
  },
  {
    title: "Setting",
    to: config.routes.settingAdmin,
    role: ["admin"],
    icon: <ion-icon name="settings-outline"></ion-icon>,
  },
];

function Sidebar({ role }) {
  const [isVisibleUserOptions, setIsVisibleUserOptions] = useState(false);

  const toggleUserOptions = () => {
    setIsVisibleUserOptions(!isVisibleUserOptions);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(LogoutAction());
    navigate("/accounts");
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
      <ul className={cx("sidebar-logout")} onClick={handleLogout}>
        <span className={cx("sidebar-item-link-icon")}>
          <ion-icon name="log-out-outline"></ion-icon>
        </span>
        <span>Logout</span>
      </ul>
    </div>
  );
}

export default Sidebar;
