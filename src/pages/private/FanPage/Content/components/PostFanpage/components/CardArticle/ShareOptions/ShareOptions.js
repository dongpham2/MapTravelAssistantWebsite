import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ShareOptions.module.scss";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
const cx = classNames.bind(styles);
export default function ShareOptions() {
  const shareUrl = "https://www.facebook.com/dong.BDSDaNang";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-list")}>
        <div className={cx("form-item")}>
          <span className={cx("icon")}>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={30} style={{ borderRadius: "50%" }} />
            </FacebookShareButton>
          </span>
          <div className={cx("text")}>Share to your facebook</div>
        </div>
        <div className={cx("form-item")}>
          <span className={cx("icon")}>
            <TelegramShareButton url={shareUrl}>
              <TelegramIcon size={30} style={{ borderRadius: "50%" }} />
            </TelegramShareButton>
          </span>
          <div className={cx("text")}>Share to your Telegram</div>
        </div>
        <div className={cx("form-item")}>
          <span className={cx("icon")}>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={30} style={{ borderRadius: "50%" }} />
            </TwitterShareButton>
          </span>
          <div className={cx("text")}>Share to your Twitter</div>
        </div>
      </div>
    </div>
  );
}
