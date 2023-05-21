import React, { useEffect, useRef, useState } from "react";
import styles from "./FormUploadBanner.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import images from "src/assets/images";
import Button from "src/component/Button";
import { storage } from "src/service/Firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
export default function FormUploadBanner({ label, data, file, setFile }) {
  const inputRef = useRef(null);
  const [visibleControls, setVisibleControls] = useState(false);

  useEffect(() => {
    return () => {
      file && URL.revokeObjectURL(file);
    };
  }, [file]);

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
      <div className={cx("form-group")}>
        <label className={cx("form-group-label")} htmlFor="">
          {label}
        </label>
        {/* onSubmit={handleSubmit} */}
        <form encType="multipart/form-data">
          <div className={cx("input-file-img")}>
            <div className={cx("input-file-block")}>
              <div className={cx("preview-img-block")}>
                {file.preview ? (
                  <img
                    className={cx("preview-img")}
                    src={file.preview}
                    alt="avatar"
                  />
                ) : (
                  <img
                    className={cx("preview-img")}
                    src={images.profile_banner}
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
            {/* <div className={cx("btn")}>
              {visibleControls ? (
                <div className={cx("controls")}>
                  <Button
                    type="button"
                    cancel
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

                  <Button rounded onClick={handleSubmit} saveInput small>
                    Save
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
