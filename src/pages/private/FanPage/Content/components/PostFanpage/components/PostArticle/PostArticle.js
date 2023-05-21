import React, { useState } from "react";
import styles from "./PostArticle.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";
import PostForm from "./PostForm/PostForm";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);
export default function PostArticle() {
  const [modalPostOpen, setModalPostOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const user = auth?.user;
  console.log(user);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        {user.avatar ? (
          <img src={user?.avatar} className={cx("img")} />
        ) : (
          <img src={images.avt_default} className={cx("img")} />
        )}
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
