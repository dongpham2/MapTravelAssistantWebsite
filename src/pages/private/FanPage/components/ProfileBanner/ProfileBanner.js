import React, { useEffect, useState } from "react";
import images from "../../../../../assets/images";
import classNames from "classnames/bind";
import styles from "./ProfileBanner.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "src/service/Firebase/firebase";

const cx = classNames.bind(styles);

export default function ProfileBanner() {
  const auth = useSelector((state) => state.auth);
  const user = auth?.user;
  const fanpage = useSelector((state) => state.fanpage);
  const [star, setStar] = useState(null);

  useEffect(() => {
    getAllReview();
  }, []);
  const getAllReview = async () => {
    try {
      const query = await getDocs(collection(db, "comments"));
      const docs = [];

      query.forEach((item) => {
        docs.push(item.data().stars);
      });

      let sum = 0;
      docs.forEach((item) => {
        sum += item;
      });
      let rate = (sum / docs.length).toFixed(0);
      setStar(rate);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("background")}
        src={images.profile_banner}
        alt="background-profile"
      />
      <div className={cx("user-avatar")}>
        {user.avatar ? (
          <img className={cx("avatar-img")} src={fanpage.avatar} />
        ) : (
          <img src={images.avt_default} className={cx("avatar-img")} />
        )}

        <div className={cx("group-infor")}>
          <div className={cx("user-name")}>{fanpage.name}</div>
          {/* <div className={cx("follower")}>ABC restaurent</div> */}
          <div className={cx("start")}>
            {star &&
              [...Array(+star)].map((_, index) => (
                <FaStar key={index} size={30} color="#ffc107" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
