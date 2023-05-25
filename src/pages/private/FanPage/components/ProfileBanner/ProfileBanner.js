import React, { useEffect, useState } from "react";
import images from "../../../../../assets/images";
import classNames from "classnames/bind";
import styles from "./ProfileBanner.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "src/service/Firebase/firebase";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";
import { useParams } from "react-router";

const cx = classNames.bind(styles);

export default function ProfileBanner() {
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const user = auth?.user;
  // const fanpage = useSelector((state) => state.fanpage);
  const [star, setStar] = useState(null);
  const [fanpage, setFanpage] = useState("");

  useEffect(() => {
    getAllReview();
  }, []);
  useEffect(() => {
    const getFanpage = async () => {
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${id}`);
      // console.log("ss", res.data.data);
      setFanpage(res.data.data);
    };
    getFanpage();
  }, []);
  const getAllReview = async () => {
    console.log("fff", fanpage._id);
    try {
      const querySnapshot = await getDoc(doc(db, "reviews", id));

      if (querySnapshot.exists()) {
        let docs = [];
        querySnapshot.data().comments.map((item) => {
          docs.push({ reviewerID: item.reviewerID, ...item });
        });

        let sum = 0;
        docs.forEach((item) => {
          sum += item.stars;
        });
        let rate = (sum / docs.length).toFixed(0);
        setStar(rate);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cx("wrapper")}>
      {fanpage?.img ? (
        <img
          className={cx("background")}
          src={fanpage.img}
          alt="background-profile"
        />
      ) : (
        <img
          className={cx("background")}
          src={images.profile_banner}
          alt="background-profile"
        />
      )}
      {/* <img
        className={cx("background")}
        src={images.profile_banner}
        alt="background-profile"
      /> */}
      <div className={cx("user-avatar")}>
        {user.avatar ? (
          <img className={cx("avatar-img")} src={fanpage?.avatar} alt="" />
        ) : (
          <img src={images.avt_default} className={cx("avatar-img")} alt="" />
        )}

        <div className={cx("group-infor")}>
          <div className={cx("user-name")}>{fanpage?.name}</div>
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
