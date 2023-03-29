import React from "react";
import classNames from "classnames/bind";
import styles from "./PlaceDetails.module.scss";

const cx = classNames.bind(styles);

export default function PlaceDetails({ place }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h2 className={cx("title")}>{place.name}</h2>
      </div>
    </div>
  );
}
