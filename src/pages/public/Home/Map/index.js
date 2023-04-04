import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Map.module.scss";
import googleMapReact from "google-map-react";
import ReactMapGL from "react-map-gl";
const cx = classNames.bind(styles);

export default function Map({ setCoordinates, coordinates, setBounds }) {
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
        mapStyle="mapbox://styles/dongpham2/clg1z1p92005c01mm2dh1zq04"
        mapboxAccessToken={token}
        onChange={(e) => {
          console.log("check props", e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      ></ReactMapGL>
    </div>
  );
}
