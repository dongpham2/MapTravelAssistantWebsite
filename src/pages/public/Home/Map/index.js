import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Map.module.scss";
import googleMapReact from "google-map-react";
import ReactMapGL from "react-map-gl";
const cx = classNames.bind(styles);

export default function Map() {
  // const coordinates = { lat: 0, lng: 0 };
  // const [viewport, setViewport] = useState({
  //   width: "100%",
  //   height: "100%",
  //   latitude: 21.0244246,
  //   longitude: 105.7938072,
  //   zoom: 16,
  // });
  const token =
    "pk.eyJ1IjoiZG9uZ3BoYW0yIiwiYSI6ImNsZno2Mmw2cDBtOGIzZnFyNGR2cm1qNGcifQ.0n85EbQStBF9pt7JvWn5Dg";
  return (
    <div className={cx("wrapper")}>
      <ReactMapGL
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 800, height: 780 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={token}
      ></ReactMapGL>
    </div>
  );
}
