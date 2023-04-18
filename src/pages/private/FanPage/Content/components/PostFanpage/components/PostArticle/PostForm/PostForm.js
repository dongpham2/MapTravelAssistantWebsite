import React, { useRef, useState } from "react";
import styles from "./PostForm.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";

const cx = classNames.bind(styles);
export default function PostForm({ setModalPostOpen, label, data }) {
  const inputRef = useRef(null);
  const [file, setFile] = useState({
    preview: "",
    data: "",
  });

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
        <div className={cx("form-group-content")}>
          <div className={cx("form-group-input")}>
            <input
              type="text"
              placeholder="Share everything perfect to your customer..."
              className={cx("text")}
            />
          </div>
          <div className={cx("add-img")}>
            <form encType="multipart/form-data">
              <div className={cx("preview-img-block")}>
                {file.preview ? (
                  <img
                    className={cx("preview-img")}
                    src={file.preview}
                    alt="avatar"
                  />
                ) : data ? (
                  <img className={cx("preview-img")} src={data} alt="avatar" />
                ) : (
                  ""
                )}
              </div>
              <label className={cx("upload")} htmlFor="file">
                <input
                  name="file"
                  id="file"
                  ref={inputRef}
                  className={cx("input", "input-file")}
                  type="file"
                />
                <div className={cx("add-icon")}>
                  <ion-icon name="cloud-upload-outline"></ion-icon>
                </div>
                <div className={cx("text")}>Add Images/Videos</div>
              </label>
            </form>
          </div>
          <div className={cx("btn")}>
            <Button articlePrimary>Post</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
