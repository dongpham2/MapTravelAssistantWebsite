import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CardArticle.module.scss";
import images from "src/assets/images";
import ShareOptions from "./ShareOptions/ShareOptions";
import CardOptions from "./CardOptions/CardOptions";
import { useSelector } from "react-redux";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";
import { useParams } from "react-router";

const cx = classNames.bind(styles);
export default function CardArticle(data) {
  // const fanpage = useSelector((state) => state.fanpage);
  const [fanpage, setFanpage] = useState("");
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const parameters = useParams();
  const isCreator = auth.user.page?._id === parameters.id ? true : false;
  const [visibleShareOptions, setVisibleUserOptions] = useState(false);
  const [visibleCardOptions, setVisibleCardOptions] = useState(false);

  const handleOpenShareOptions = () => {
    setVisibleUserOptions(!visibleShareOptions);
  };

  const handleOpenCardOptions = () => {
    setVisibleCardOptions(!visibleCardOptions);
  };
  useEffect(() => {
    const getFanpage = async () => {
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${id}`);
      setFanpage(res.data.data);
    };
    getFanpage();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>
        <div className={cx("header-infor")}>
          {fanpage.avatar ? (
            <img src={fanpage.avatar} className={cx("img")} alt="" />
          ) : (
            <img src={images.avt_default} className={cx("img")} alt="" />
          )}
          <div className={cx("name")}>
            {fanpage.name}
            <div className={cx("time")}>24/05/2023</div>
          </div>
        </div>

        <div className={cx("icon-option")} onClick={handleOpenCardOptions}>
          {isCreator ? (
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          ) : (
            ""
          )}
        </div>
        {visibleCardOptions ? <CardOptions /> : ""}
      </div>
      <div className={cx("content")}>
        <span>
          {/* In my opinion, the restaurant’s service that satisfies me the most is
          the service of Hutong. Hutong is a hotpot restaurant which belongs to
          the Golden Spoon Group. It has several branches, I’ve tried some of
          them and the staffs are all good. */}
          {data.data.title}
        </span>
        {/* <span
          dangerouslySetInnerHTML={{
            __html: article?.content,
          }}
        ></span> */}
      </div>
      <div className={cx("photos")}>
        <img src={data.data.img} alt="" className={cx("image")} />
      </div>

      <div className={cx("reaction")}>
        {/* <div className={cx("amount-fanpage")}>
          <span className={cx("icon")}>
            <ion-icon name="star-outline"></ion-icon>
          </span>
          Have more than 2000 love it !!
        </div> */}
        <div className={cx("reaction-post")}>
          <div className={cx("reaction-post-group")}>
            <span className={cx("icon")}>
              <ion-icon name="heart-circle-outline"></ion-icon>
            </span>
            Fancy
          </div>
          <div
            className={cx("reaction-post-group")}
            onClick={handleOpenShareOptions}
          >
            <span className={cx("icon")}>
              <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
            Share
          </div>
          {visibleShareOptions ? <ShareOptions /> : ""}
        </div>
      </div>
    </div>
  );
}
