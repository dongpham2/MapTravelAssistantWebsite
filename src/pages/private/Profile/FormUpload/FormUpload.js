import React, { useEffect, useRef, useState } from "react";
import styles from "./FormUpload.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import images from "src/assets/images";
import Button from "src/component/Button";
import { storage } from "src/service/Firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
export default function FormUpload({ label, data, file, setFile }) {
  const [imagesCurrent, setImagesCurrent] = useState();
  // const inputRef = useRef(null);
  const [visibleControls, setVisibleControls] = useState(false);
  // const [file, setFile] = useState({
  //   preview: "",
  //   data: "",
  // });

  // useEffect(() => {
  //   return () => {
  //     file && URL.revokeObjectURL(file);
  //   };
  // }, [file]);

  const handleChangeFile = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
    setVisibleControls(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${file.data + v4()}`);
    uploadBytes(imageRef, file.data)
      .then(() => {
        getDownloadURL(imageRef)
          .then((file) => {
            // console.log(file);
            setFile({ preview: file, data: "" });
            toast.success("upload successfully!");
          })
          .catch((error) => {
            console.log(error.message, "error getting url");
            toast.error("failed to upload");
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("failed to upload");
      });

    setVisibleControls(false);
  };

  // const handleChangeImage = (e) => {
  //   const file = e.target.files[0];
  //   setFileName(file.name);
  //   let storeRef = firebase.storage().ref(buses/${file.name});
  //   storeRef.put(file).then((e) => {
  //     storeRef.getDownloadURL().then(async (url, e) => {
  //       setUrlImage(url);
  //     });
  //   });
  // };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-group")}>
        <label className={cx("form-group-label")} htmlFor="">
          {label}
        </label>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className={cx("input-file-img")}>
            <div className={cx("input-file-block")}>
              <div className={cx("preview-img-block")}>
                {/* {file.preview ? (
                  <img
                    className={cx("preview-img")}
                    src={file.preview}
                    alt="avatar"
                  />
                ) : data ? (
                  <img className={cx("preview-img")} src={data} alt="avatar" />
                ) : (
                  <img
                    className={cx("preview-img")}
                    src={images.avatarDefault}
                    alt="avatar"
                  />
                )} */}
                {file && file.preview ? (
                  <img
                    className={cx("preview-img")}
                    src={file.preview}
                    alt="avatar"
                  />
                ) : data ? (
                  <img className={cx("preview-img")} src={data} alt="avatar" />
                ) : (
                  <img
                    className={cx("preview-img")}
                    src={images.avatarDefault}
                    alt="avatar"
                  />
                )}
              </div>

              <label className={cx("mark")} htmlFor="file">
                <input
                  name="file"
                  id="file"
                  // ref={inputRef}
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
              {visibleControls ? (
                <div className={cx("controls")}>
                  <Button rounded type="submit" saveInput small>
                    Save
                  </Button>
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
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
