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
        // bootstrapURLKeys={{
        //   key: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA372PcuJQKYrKADjhHTLLDVcfsoCzF-4M&callback=initMap",
        // }}

        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={(50, 50, 50, 50)}
        options={""}
        onChange={""}
        onChildClick={""}
      ></googleMapReact>

      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
      ></iframe>
    </div>
  );
}
