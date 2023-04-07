import React from "react";
import styles from "./PostArticle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function PostArticle() {
  return <div className={cx("wrapper")}>PostArticle</div>;
}
