import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

export default function Message({ message }) {
  const { auth } = useSelector((state) => state);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const currentUser = {
    _id: auth.user.userID,
    email: auth.user.email,
    avatar:
      "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/webbdeepfield.jpg?w=1600&h=900",
    fullname: auth.user.fullname,
  };
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      key={message.id}
      className={`${styles.message} ${
        message.senderId === currentUser._id && styles.owner
      }`}
    >
      <div className={cx("message-info")}>
        <img
          src={
            message.senderId === currentUser._id
              ? currentUser.avatar
              : data.user.avatar
          }
          alt=""
        />
      </div>
      {/* Content */}
      <div className={cx("message-content")}>
        <span
          dangerouslySetInnerHTML={{
            __html: message.text,
          }}
        ></span>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}
