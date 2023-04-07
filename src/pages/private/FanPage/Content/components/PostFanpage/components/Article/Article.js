import React from "react";
import classNames from "classnames/bind";
import styles from "./Article.module.scss";

const cx = classNames.bind(styles);
export default function Article() {
  return <div className={cx("wrapper")}>Article</div>;
}
