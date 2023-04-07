import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileFanpage.module.scss";
import Input from "../../../../../../component/Input";
import Button from "../../../../../../component/Button";
import { FaStar } from "react-icons/fa";
import images from "../../../../../../assets/images";
const cx = classNames.bind(styles);

export default function ProfileFanpage() {
  // state controller
  const [isBio, setIsBio] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  // state onChange
  const [money, setMoney] = useState("1000 vnd - 10000 vnd");
  const [website, setWebsite] = useState();
  const [gmail, setGmail] = useState();
  const [phone, setPhone] = useState();
  // change bio
  const handleBioChange = () => {
    setIsBio(!isBio);
    console.log(isBio);
  };
  // change profile
  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3 className={cx("introduce")}>Introduce</h3>

        {!isBio ? (
          <Button bio onClick={handleBioChange}>
            Add Bio
          </Button>
        ) : (
          <div className={cx("bio-infor")}>
            <Input primary />
            <div className={cx("btn")}>
              <Button small cancel onClick={handleBioChange}>
                Cancel
              </Button>
              <Button small saveInput>
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* content */}
      <div className={cx("content")}>
        <div className={cx("start")}>
          {[...Array(5)].map((stars, index) => {
            return <FaStar size={30} color="#ffc107" />;
          })}
        </div>
        <div className={cx("input-group")}>
          <div className={cx("icon")}>
            <ion-icon name="cash-outline"></ion-icon>
          </div>
          <span>10000 VND - 100000 VND</span>
        </div>
        <div className={cx("input-group")}>
          <div className={cx("icon")}>
            <ion-icon name="globe-outline"></ion-icon>
          </div>
          <span>abcrestaurant.vn</span>
        </div>

        <div className={cx("input-group")}>
          <div className={cx("icon")}>
            <ion-icon name="at-outline"></ion-icon>
          </div>
          abcrestaurent@gmail.com
        </div>
        <div className={cx("input-group")}>
          <div className={cx("icon")}>
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <span>085 339 0931</span>
        </div>
        <div className={cx("input-group")}>
          <div className={cx("icon")}>
            <img src={images.follower} alt="follower" />
          </div>
          <span>2001 followers</span>
        </div>
      </div>
      <Input />
      <Button bio onClick={handleEditProfile}>
        Edit Profile
      </Button>
    </div>
  );
}
