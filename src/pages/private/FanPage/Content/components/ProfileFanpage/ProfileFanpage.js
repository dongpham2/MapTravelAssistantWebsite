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

  const [isEditProfile, setIsEditProfile] = useState(false);
  // state onChange
  const [formEditProfile, setFormEditProfile] = useState({
    money: "1000 vnd - 10000 vnd",
    website: "@abcrestaurant.vn",
    time: "7:00 am - 9:00 pm",
    phone: "085 339 0931",
    follower: "2001 followers",
  });

  // change profile
  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile);
  };

  return (
    <div className={cx("wrapper")}>
      <Introduction />
      {/* content */}
      <div className={cx("content")}>
        <div className={cx("start")}>
          {[...Array(5)].map((stars, index) => {
            return <FaStar size={30} color="#ffc107" />;
          })}
        </div>
        {!isEditProfile ? (
          <>
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
          </>
        ) : (
          <>
            <InputField
              icon={<ion-icon name="cash-outline"></ion-icon>}
              type="text"
              value={formEditProfile.money}
            />
            <InputField
              icon={<ion-icon name="globe-outline"></ion-icon>}
              type="text"
              value={formEditProfile.website}
            />
            <InputField
              icon={<ion-icon name="time-outline"></ion-icon>}
              type="text"
              value={formEditProfile.time}
            />
            <InputField
              icon={<ion-icon name="call-outline"></ion-icon>}
              type="text"
              value={formEditProfile.phone}
            />
            <InputField
              icon={<img src={images.follower} alt="follower" />}
              type="text"
              value={formEditProfile.follower}
            />
          </>
        )}
      </div>
      {!isEditProfile ? (
        <>
          <Button bio onClick={handleEditProfile}>
            Edit Profile
          </Button>
        </>
      ) : (
        <div className={cx("btn")}>
          <Button small cancel onClick={handleEditProfile}>
            Cancel
          </Button>
          <Button small saveInput>
            Save
          </Button>
        </div>
      )}
    </div>
  );
}
