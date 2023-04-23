import React, { useRef, useState } from "react";
import styles from "./PostForm.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";
import TextEditor from "src/component/EditorText/EditorText";

const cx = classNames.bind(styles);

export default function PostForm({ setModalPostOpen, label, data }) {
  const inputRef = useRef(null);
  const [visibleControls, setVisibleControls] = useState(false);
  const [content, setContent] = useState("");
  const [file, setFile] = useState({
    preview: "",
    data: "",
  });
  const handleChangeFile = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
    setVisibleControls(true);
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
        <div className={cx("form-group-content")}>
          <div className={cx("form-group-input")}>
            <TextEditor setContentBlog={setContent} sHidderTools={true} />
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
                  onChange={handleChangeFile}
                  multiple
                />
                <div className={cx("add-icon")}>
                  <ion-icon name="cloud-upload-outline"></ion-icon>
                </div>
                <div className={cx("text")}>Add Images/Videos</div>
              </label>
            </form>
          </div>
        </div>
        <div className={cx("btn")}>
          <Button articlePrimary>Post</Button>
        </div>
      </div>
    </div>
  );
}
