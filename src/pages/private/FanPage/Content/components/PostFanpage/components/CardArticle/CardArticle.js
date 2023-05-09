import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CardArticle.module.scss";
import images from "src/assets/images";
import ShareOptions from "./ShareOptions/ShareOptions";
import CardOptions from "./CardOptions/CardOptions";

const cx = classNames.bind(styles);
export default function CardArticle() {
  const [visibleShareOptions, setVisibleUserOptions] = useState(false);
  const [visibleCardOptions, setVisibleCardOptions] = useState(false);
  const handleOpenShareOptions = () => {
    setVisibleUserOptions(!visibleShareOptions);
  };

  const handleOpenCardOptions = () => {
    setVisibleCardOptions(!visibleCardOptions);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>
        <div className={cx("header-infor")}>
          <img src={images.avt} className={cx("img")} />
          <div className={cx("name")}>
            Đông Phạm
            <div className={cx("time")}>24/05/2023</div>
          </div>
        </div>
        <div className={cx("icon-option")} onClick={handleOpenCardOptions}>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
        {visibleCardOptions ? <CardOptions /> : ""}
      </div>
      <div className={cx("content")}>
        <span>
          In my opinion, the restaurant’s service that satisfies me the most is
          the service of Hutong. Hutong is a hotpot restaurant which belongs to
          the Golden Spoon Group. It has several branches, I’ve tried some of
          them and the staffs are all good.
        </span>
        {/* <span
          dangerouslySetInnerHTML={{
            __html: article?.content,
          }}
        ></span> */}
      </div>
      <div className={cx("photos")}>
        <img src={images.banner_default} alt="" className={cx("image")} />
      </div>

      <div className={cx("reaction")}>
        <div className={cx("amount-user")}>
          <span className={cx("icon")}>
            <ion-icon name="star-outline"></ion-icon>
          </span>
          Have more than 2000 love it !!
        </div>
        <div className={cx("reaction-post")}>
          <div className={cx("reaction-post-group")}>
            <span className={cx("icon")}>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            Star
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
