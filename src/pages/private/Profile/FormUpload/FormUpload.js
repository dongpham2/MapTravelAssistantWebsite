import React, { useRef, useState } from "react";
import styles from "./FormUpload.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import images from "src/assets/images";
import Button from "src/component/Button";

const cx = classNames.bind(styles);
export default function FormUpload({ label, data }) {
  const inputRef = useRef(null);
  const [visibleControls, setVisibleControls] = useState(false);
  const [file, setFile] = useState({
    preview: "",
    data: "",
  });

  const handleChangeFile = (e) => {
    e.preventDefault();
    setVisibleControls(true);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-group")}>
        <label className={cx("form-group-label")} htmlFor="">
          {label}
        </label>
        <form encType="multipart/form-data">
          <>
            <div className={cx("test")}>
              <div className={cx("input-file-block")}>
                <div className={cx("preview-img-block")}>
                  {file.preview ? (
                    <img
                      className={cx("preview-img")}
                      src={file.preview}
                      alt="avatar"
                    />
                  ) : data ? (
                    <img
                      className={cx("preview-img")}
                      src={data}
                      alt="avatar"
                    />
                  ) : (
                    <img
                      className={cx("preview-img")}
                      src={images.avt_default}
                      alt="avatar"
                    />
                  )}
                </div>
                <label className={cx("mark")} htmlFor="file">
                  <input
                    name="file"
                    id="file"
                    ref={inputRef}
                    className={cx("input", "input-file")}
                    type="file"
                    onChange={handleChangeFile}
                  />
                  <div className={cx("input-mark")}>
                    <ion-icon
                      className={cx("icon")}
                      name="camera-outline"
                    ></ion-icon>
                  </div>
                </label>
              </div>
              <div className={cx("btn")}>
                {/* {visibleControls ? ( */}
                <div className={cx("controls")}>
                  <Button rounded type="submit">
                    Save
                  </Button>
                  <Button
                    type="button"
                    secondary
                    rounded
                    small
                    onClick={() => {
                      setFile({
                        preview: "",
                        data: "",
                      });
                      setVisibleControls(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                {/* ) : ( "" )} */}
              </div>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}
