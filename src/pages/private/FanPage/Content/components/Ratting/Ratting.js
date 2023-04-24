import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Ratting.module.scss";
import { FaStar } from "react-icons/fa";
import images from "src/assets/images";
import TextEditor from "src/component/EditorText/EditorText";
import Input from "src/component/Input/Input";
import UserComments from "../PostFanpage/components/CardArticle/UserComments/UserComments";

const cx = classNames.bind(styles);
export default function Ratting() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>Write Your Comment to Rate</div>
      <div className={cx("user-profile")}>
        <div className={cx("start")}>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className={cx("start-icon")}
                  size={30}
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div className={cx("user-comment")}>
          <img src={images.avt_default} className={cx("avt-user")} />
          <div className={cx("input")}>
            <TextEditor setContentBlog={setComment} sHidderTools={true} />
          </div>
        </div>
        <div className={cx("comments")}>
          <div className={cx("comments-other")}>
            <span className={cx("more")}>Rate & Review from Customer</span>
            <UserComments />
            <UserComments />
            <UserComments />
          </div>
        </div>
      </div>
    </div>
  );
}
