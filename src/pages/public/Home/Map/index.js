import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Map.module.scss";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactMapGL from "react-map-gl";
import CardMap from "./CardMap/CardMap";
const cx = classNames.bind(styles);
const markerIc = new L.Icon({
  iconUrl: require("../../../../assets/images/icon/iconmap.png"),
  iconSize: [35, 45],
});

export default function Map() {
  const position = [16.06089773991539, 108.22178340647243];
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <CardMap /> */}
      {/*  <LeafletGeocoder /> */}
      {/* <LeafletRoutingMachine /> */}
      <Marker
        position={[16.06089773991539, 108.22178340647243]}
        icon={markerIc}
      >
        <Popup>
          <CardMap />
          {/* <a href="https://thecoffeehouse.com/">Visit W3Schools.com!</a> */}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
