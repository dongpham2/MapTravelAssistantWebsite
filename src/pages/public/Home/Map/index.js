import React from "react";
import classNames from "classnames/bind";
import styles from "./Map.module.scss";
import googleMapReact from "google-map-react";

const cx = classNames.bind(styles);

export default function Map() {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={cx("wrapper")}>
      <googleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={(50, 50, 50, 50)}
        options={""}
        onChange={""}
        onChildClick={""}
      ></googleMapReact>
    </div>
  );
}
