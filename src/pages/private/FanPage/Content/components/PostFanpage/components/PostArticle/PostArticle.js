import React, { useState } from "react";
import styles from "./PostArticle.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";
import PostForm from "./PostForm/PostForm";

const cx = classNames.bind(styles);
export default function PostArticle() {
  const [modalPostOpen, setModalPostOpen] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img src={images.avt} className={cx("img")} />
      </div>
      <Button
        articleSecondary
        onClick={() => {
          setModalPostOpen(true);
        }}
      >
        Write something to share with your customer...
      </Button>

      {modalPostOpen && <PostForm setModalPostOpen={setModalPostOpen} />}
    </div>
  );
}
