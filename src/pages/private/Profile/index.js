import React from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames";
const cx = classNames.bind(styles);
export default function Profile() {
  return (
    <div className={cx("wrapper")}>
      <h1>Profile page</h1>
    </div>
  );
}
