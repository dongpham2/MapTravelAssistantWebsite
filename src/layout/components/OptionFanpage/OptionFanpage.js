import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./OptionFanpage.module.scss";
import { NavLink } from "react-router-dom";
import config from "../../../config";
import Button from "../../../component/Button";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";
import ChatList from "src/pages/private/Chat/ChatList/ChatList";

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
  const auth = useSelector((state) => state.auth);
  const parameters = useParams();
  const isCreator = auth.user.page?._id === parameters.id ? true : false;

  const [showChat, setShowChat] = useState(false);
  const handleShowChat = () => {
    setShowChat(!showChat);
  };
  // useEffect(() => {
  //   const getFanpage = async () => {
  //     const res = await httpClient.get(`${API_CREATEFANPAGE}/${parameters.id}`);
  //     console.log("res", res.data);
  //   };
  //   getFanpage();
  // }, []);
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
      {!isCreator ? (
        <ul className={cx("navbar-option")}>
          <Button
            primary
            leftIcon={<ion-icon name="chatbox-ellipses-outline"></ion-icon>}
            onClick={handleShowChat}
          >
            Message
          </Button>
          {showChat && <ChatList />}
          {/* <ChatList /> */}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
