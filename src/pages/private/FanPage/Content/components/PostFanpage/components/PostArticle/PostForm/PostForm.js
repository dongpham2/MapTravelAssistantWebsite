import React, { useRef, useState } from "react";
import styles from "./PostForm.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";
import TextEditor from "src/component/EditorText/EditorText";
import FormUploadBanner from "src/pages/private/Profile/FormUploadBanner/FormUploadBanner";

const cx = classNames.bind(styles);

export default function PostForm({ setModalPostOpen, label, data }) {
  const inputRef = useRef(null);
  const [visibleControls, setVisibleControls] = useState(false);
  const [content, setContent] = useState("");

  const handlePostArticle = () => {
    console.log(content);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("overlay")}></div>
      <div className={cx("form-group")}>
        <div className={cx("header")}>
          <div className={cx("header-controller")}>
            Create Article
            <div
              className={cx("icon")}
              onClick={() => {
                setModalPostOpen(false);
              }}
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className={cx("header-infor")}>
            <img src={images.avt} className={cx("img")} />
            <div className={cx("name")}>Đông Phạm</div>
          </div>
        </div>
        {/* content */}
        <div className={cx("content")}>
          <div className={cx("text")}>
            <TextEditor setContentBlog={setContent} sHidderTools={true} />
          </div>
          <div className={cx("image")}>
            <FormUploadBanner />
          </div>
        </div>
        <div className={cx("btn")}>
          <Button articlePrimary onClick={handlePostArticle}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
