import React, { useEffect, useRef, useState } from "react";
import styles from "./PostForm.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";
import TextEditor from "src/component/EditorText/EditorText";
import FormUploadBanner from "src/pages/private/Profile/FormUploadBanner/FormUploadBanner";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { storage } from "src/service/Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { actionCreatePost } from "src/redux/actions/post";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";
import { useParams } from "react-router";

const cx = classNames.bind(styles);

export default function PostForm({ setModalPostOpen, label, data }) {
  // const fanpage = useSelector((state) => state.fanpage);
  const [fanpage, setFanpage] = useState("");
  // const id = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user")).userID
  //   : "";
  const { id } = useParams();
  const idUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).userID
    : "";
  const inputRef = useRef(null);
  const [visibleControls, setVisibleControls] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const [file, setFile] = useState({
    preview: "",
    data: "",
  });

  const handleSubmitImages = async (e) => {
    const imageRef = ref(storage, `images/${file.data + v4()}`);
    uploadBytes(imageRef, file.data)
      .then(() => {
        getDownloadURL(imageRef)
          .then((file) => {
            setFile({ preview: file, data: "" });
            // toast.success("upload successfully!");
            dispatch(
              actionCreatePost({
                userID: idUser,
                title: content,
                img: file,
              })
            );
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

  const handlePostArticle = () => {
    handleSubmitImages();
  };
  const handleSetFile = (file) => {
    setFile(file);
  };
  useEffect(() => {
    const getFanpage = async () => {
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${id}`);
      setFanpage(res.data.data);
      console.log(res.data.data);
    };
    getFanpage();
  }, []);
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
            {fanpage.avatar ? (
              <img src={images.avt} className={cx("img")} alt="" />
            ) : (
              <img src={images.avt_default} className={cx("img")} alt="" />
            )}

            <div className={cx("name")}>{fanpage.name}</div>
          </div>
        </div>
        {/* content */}
        <div className={cx("content")}>
          <div className={cx("text")}>
            <TextEditor setContentBlog={setContent} sHidderTools={true} />
          </div>
          <div className={cx("image")}>
            <FormUploadBanner setFile={handleSetFile} file={file} />
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
