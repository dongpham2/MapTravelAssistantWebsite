import React from "react";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import ProfileFanpage from "./components/ProfileFanpage/ProfileFanpage";
import PostFanpage from "./components/PostFanpage/PostFanpage";

const cx = classNames.bind(styles);
export default function Content() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("profile")}>
          <ProfileFanpage />
        </div>
        <div className={cx("post")}>
          <PostFanpage />
        </div>
      </div>
    </div>
  );
}
