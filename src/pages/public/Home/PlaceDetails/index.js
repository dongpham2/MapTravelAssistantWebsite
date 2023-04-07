import React from "react";
import classNames from "classnames/bind";
import styles from "./PlaceDetails.module.scss";
import images from "../../../../assets/images";
import Button from "../../../../component/Button";
import { Link } from "react-router-dom";
import config from "../../../../config";
const cx = classNames.bind(styles);

export default function PlaceDetails({ place }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("banner")}>
          <Link to={config.routes.fanpage}>
            <img src={images.banner_default} alt="" />
          </Link>
        </div>
        <div className={cx("title")}>{place.name}</div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>sao</div>
          <div className={cx("ratting-follower")}>
            {place.follower} followers
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Address:</div>
          <div className={cx("address-location")}>{place.address}</div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Price:</div>
          <div className={cx("price-amount")}>
            {place.firstPrice}$ - {place.lastPrice}$
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Price:</div>
          <div className={cx("time-work")}>
            {place.open} am - {place.close} pm
          </div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("title")}>Phone:</div>
          <div className={cx("phone-number")}>{place.phone}</div>
        </div>
        <div className={cx("desc-card")}>
          <div className={cx("description-detail")}>
            <span className={cx("title")}>Description: </span>
            {place.desc}
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
