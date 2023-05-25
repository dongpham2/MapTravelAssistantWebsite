import React, { useEffect, useState } from "react";
import styles from "./PostArticle.module.scss";
import classNames from "classnames/bind";
import images from "src/assets/images";
import Button from "src/component/Button";
import PostForm from "./PostForm/PostForm";
import { useSelector } from "react-redux";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";
import { useParams } from "react-router";

const cx = classNames.bind(styles);
export default function PostArticle() {
  const { id } = useParams();

  const [modalPostOpen, setModalPostOpen] = useState(false);
  // const fanpage = useSelector((state) => state.fanpage);
  const [fanpage, setFanpage] = useState("");

  useEffect(() => {
    const getFanpage = async () => {
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${id}`);
      console.log(res.data.data);
      setFanpage(res.data.data);
    };
    getFanpage();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        {fanpage.avatar ? (
          <img src={fanpage?.avatar} className={cx("img")} alt="" />
        ) : (
          <img src={images.avt_default} className={cx("img")} alt="" />
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
