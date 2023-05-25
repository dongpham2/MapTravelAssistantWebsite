import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./PlaceDetails.module.scss";
import images from "../../../../assets/images";
import Button from "../../../../component/Button";
import { Link } from "react-router-dom";
import config from "../../../../config";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "src/service/Firebase/firebase";
const cx = classNames.bind(styles);

export default function PlaceDetails({ data, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const fanpage = useSelector((state) => state.fanpage);
  // const [stars, setStars] = useState([]);
  // const pageInf = {
  //   pageID: "1111",
  // };

  // useEffect(() => {
  //   getAllReview();
  // }, []);
  // const getAllReview = async () => {
  //   try {
  //     let docs = [];
  //     const query = await getDocs(collection(db, "reviews"));
  //     query.forEach((item) => {
  //       let sum = 0;

  //       item.data().comments.map((i) => {
  //         sum += i.stars;
  //       });
  //       docs.push({ id: item.id, star: sum });

  //       // console.log("aa", item.data().comments);
  //     });
  //     // console.log(docs);
  //     setStars(docs);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("banner")}>
          <Link to={`/fanpage/${data._id}`}>
            {data ? (
              <img
                src={images.profile_banner}
                alt="avatar"
                className={cx("preview-img")}
              />
            ) : (
              <img src={data} alt="avatar" className={cx("preview-img")} />
            )}
          </Link>
        </div>
        <div className={cx("name")}>{data.name}</div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>
            {/* {data._id === stars.id
              ? stars.map((stars, index) => {
                  return <FaStar size={25} color="#ffc107" />;
                })
              : null} */}
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Address:</div>
          <div className={cx("address-location")}>{data.address}</div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Price:</div>
          <div className={cx("price-amount")}>
            {data.priceStart} {data.denomina} - {data.priceEnd}
            {data.denomina}
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Opening:</div>
          <div className={cx("time-work")}>
            {data.open} am - {data.close} pm
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Phone:</div>
          <div className={cx("phone-number")}>{data.phone}</div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("description-detail")}>
            <span className={cx("title")}>Description: </span>
            <span
              className={cx("desc")}
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></span>
          </div>
        </div>
        <Link to={`/fanpage/${data._id}`}>
          <Button
            className={cx("btn")}
            secondary
            rightIcon={<ion-icon name="arrow-forward-outline"></ion-icon>}
          >
            Go to page
          </Button>
        </Link>
      </div>
    </div>
  );
}
