import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";
import { useSelector } from "react-redux";
import images from "src/assets/images";

const cx = classNames.bind(styles);

export default function Message({ message }) {
  const { auth } = useSelector((state) => state);
  const { data } = useContext(ChatContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const formatTimestamp = (timestamp) => {
    const dateObj = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const formattedDate = dateObj.toLocaleDateString(); // Format date
    const formattedTime = dateObj.toLocaleTimeString(); // Format time
    return `${formattedDate} ${formattedTime}`;
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const ref = useRef();
  const currentUser = {
    _id: auth.user.userID,
    email: auth.user.email,
    avatar: auth.user.avatar == null ? images.avt_default : auth.user.avatar,
    fullname: auth.user.fullname,
  };
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      key={message.senderId}
      className={`${styles.message} ${
        message.senderId === currentUser._id && styles.owner
      }`}
    >
      <div className={cx("message-info")}>
        <img
          src={
            message.senderId === currentUser._id
              ? currentUser.avatar
              : data.user.avatar == null
              ? images.avt_default
              : data.user.avatar
          }
          alt=""
        />
      </div>
      {/* Content */}
      <div
        className={cx("message-content")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: message.text,
          }}
        ></span>
        {showTooltip && (
          <div className={cx("tooltip")}>
            {formatTimestamp(message.date.seconds)}
          </div>
        )}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
}
