import React from "react";
import classNames from "classnames/bind";
import styles from "./PlaceDetails.module.scss";
import images from "../../../../assets/images";
import Button from "../../../../component/Button";
import { Link } from "react-router-dom";
import config from "../../../../config";
import { FaStar } from "react-icons/fa";
const cx = classNames.bind(styles);

export default function PlaceDetails({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("banner")}>
          <Link to={config.routes.fanpage}>
            <img src={images.banner_default} alt="" />
          </Link>
        </div>
        <div className={cx("name")}>{data.name}</div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>
            {[...Array(5)].map((stars, index) => {
              return <FaStar size={25} color="#ffc107" />;
            })}
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Address:</div>
          <div className={cx("address-location")}>{data.address}</div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Price:</div>
          <div className={cx("price-amount")}>
            {data.priceStart}$ - {data.priceEnd}$
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
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></span>
          </div>
        </div>
        <Link to={config.routes.posts}>
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
