import React from "react";
import PostArticle from "./components/PostArticle/PostArticle";
import Article from "./components/Article/Article";
import classNames from "classnames/bind";
import styles from "./PostFanpage.module.scss";

const cx = classNames.bind(styles);
export default function PostFanpage() {
  return (
    <div className={cx("wrapper")}>
      <PostArticle />
      <Article />
    </div>
  );
}
