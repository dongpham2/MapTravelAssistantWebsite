import React, { useEffect, useRef, useState } from "react";
import styles from "./FormUploadAvatar.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import images from "src/assets/images";
import Button from "src/component/Button";
import { storage } from "src/service/Firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
export default function FormUploadAvatar() {
  const [img, setImg] = useState(null);
  console.log(img);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, img)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            toast.success("successfully uploaded");
          })
          .catch((error) => {
            console.log(error.message, "error get image");
          });
      })
      .catch((error) => {
        console.log(error.message, "error get image");
      });
    setImg(null);
  };

  return (
    <div className={cx("wrapper")}>
      {/* <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className={cx("input-file-img")}>
          <div className={cx("input-file-block")}>
            <div className={cx("preview-img-block")}>
              {img ? (
                <img className={cx("preview-img")} src={url} alt="avatar" />
              ) : (
                <img
                  className={cx("preview-img")}
                  src={images.avt_default}
                  alt="avatar"
                />
              )}
            </div>
            <label className={cx("mark")} htmlFor="files">
              <input
                name="files"
                id="files"
                // ref={inputRef}
                className={cx("input", "input-file")}
                type="file"
                onChange={handleImageChange}
              />
              <div className={cx("input-mark")}>
                <ion-icon
                  className={cx("icon")}
                  name="camera-outline"
                ></ion-icon>
              </div>
            </label>
          </div>
        </div>
        <Button primary type="submit">
          Submit
        </Button>
      </form> */}
      <form encType="multipart/form-data">
        <div className={cx("input-file-img")}>
          <div className={cx("input-file-block")}>
            <div className={cx("preview-img-block")}>
              <img className={cx("preview-img")} src={url} alt="avatar" />
            </div>
            <input type="file" onChange={handleImageChange} />
            {/* <label className={cx("mark")} htmlFor="files">
              <input
                name="files"
                id="files"
                // ref={inputRef}
                className={cx("input", "input-file")}
                type="file"
                onChange={handleImageChange}
              />
              <div className={cx("input-mark")}>
                <ion-icon
                  className={cx("icon")}
                  name="camera-outline"
                ></ion-icon>
              </div>
            </label> */}
          </div>
        </div>
      </form>

      <Button primary onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
