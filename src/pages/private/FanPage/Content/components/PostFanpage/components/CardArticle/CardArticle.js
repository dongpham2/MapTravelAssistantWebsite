import React from "react";
import classNames from "classnames/bind";
import styles from "./CardArticle.module.scss";
import images from "src/assets/images";
import Input from "src/component/Input";
import UserComments from "./UserComments/UserComments";

const cx = classNames.bind(styles);
export default function CardArticle() {
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
        <span className={cx("icon-option")}>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </span>
      </div>
      <div className={cx("content")}>
        <article>
          In my opinion, the restaurant’s service that satisfies me the most is
          the service of Hutong. Hutong is a hotpot restaurant which belongs to
          the Golden Spoon Group. It has several branches, I’ve tried some of
          them and the staffs are all good.
        </article>
      </div>
      <div className={cx("photos")}>
        <img src={images.avt} alt="" className={cx("image")} />
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
            Ratting
          </div>
          <div className={cx("reaction-post-group")}>
            <span className={cx("icon")}>
              <ion-icon name="chatbox-outline"></ion-icon>
            </span>
            Comments
          </div>
          <div className={cx("reaction-post-group")}>
            <span className={cx("icon")}>
              <ion-icon name="return-up-forward-outline"></ion-icon>
            </span>
            Share
          </div>
        </div>
        <div className={cx("comments")}>
          <div className={cx("comments-post")}>
            <img src={images.avt} className={cx("img")} />
            <Input
              primary
              rightIcon={
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
              }
              placeholder="Write your comments"
            />
          </div>
          <div className={cx("comments-other")}>
            <UserComments />
          </div>
        </div>
      </div>
    </div>
  );
}
