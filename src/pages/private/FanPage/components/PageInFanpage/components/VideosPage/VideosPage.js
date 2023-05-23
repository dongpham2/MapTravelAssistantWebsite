import React from "react";
import classNames from "classnames/bind";
import styles from "./VideosPage.module.scss";

const cx = classNames.bind(styles);
export default function VideosPage() {
  return <div className={cx("wrapper")}>this is video page</div>;
}
