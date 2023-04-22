import React from "react";
import PostArticle from "./components/PostArticle/PostArticle";
import classNames from "classnames/bind";
import styles from "./PostFanpage.module.scss";
import CardArticle from "./components/CardArticle/CardArticle";

const cx = classNames.bind(styles);
export default function PostFanpage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("post-form")}>
        <PostArticle />
      </div>
      <div className={cx("post-article")}>
        <CardArticle />
        <CardArticle />
      </div>
    </div>
  );
}
