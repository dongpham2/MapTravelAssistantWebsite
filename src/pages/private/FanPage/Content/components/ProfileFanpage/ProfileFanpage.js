import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileFanpage.module.scss";
import Button from "../../../../../../component/Button";
import { FaStar } from "react-icons/fa";
import images from "../../../../../../assets/images";
import Introduction from "./Introduction/Introduction";
import InputField from "./FormEdit/InputField";

const cx = classNames.bind(styles);

export default function ProfileFanpage() {
  // state controller
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // state onChange
  const [formEditProfile, setFormEditProfile] = useState({
    money: "1000 vnd - 10000 vnd",
    website: "@abcrestaurant.vn",
    time: "7:00 am - 9:00 pm",
    phone: "085 339 0931",
    follower: "2001 followers",
  });

  return (
    <div className={cx("wrapper")}>
      <Introduction />
      {/* content */}
      <div className={cx("content")}>
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

        <div className={cx("input-group")}>
          <span className={cx("icon")}>
            <ion-icon name="cash-outline"></ion-icon>
          </span>
          <div className={cx("detail")}>{formEditProfile.money} </div>
        </div>
        <div className={cx("input-group")}>
          <span className={cx("icon")}>
            <ion-icon name="globe-outline"></ion-icon>
          </span>
          <div className={cx("detail")}>{formEditProfile.website} </div>
        </div>
        <div className={cx("input-group")}>
          <span className={cx("icon")}>
            <ion-icon name="at-outline"></ion-icon>
          </span>
          <div className={cx("detail")}>{formEditProfile.time} </div>
        </div>
        <div className={cx("input-group")}>
          <span className={cx("icon")}>
            <ion-icon name="call-outline"></ion-icon>
          </span>
          <div className={cx("detail")}>{formEditProfile.phone} </div>
        </div>
        <div className={cx("input-group")}>
          <span className={cx("icon")}>
            <img src={images.follower} alt="follower" />
          </span>
          <div className={cx("detail")}>{formEditProfile.follower} </div>
        </div>
      </div>
    </div>
  );
}
