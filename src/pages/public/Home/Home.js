import React, { useEffect, useState } from "react";
import Map from "./Map";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import DetailBar from "./DetailBar";
import getPlacesData from "../../../api/googleClientApi";

const cx = classNames.bind(styles);
export default function Home() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  useEffect(() => {
    getPlacesData();
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("left")}>
        <DetailBar />
      </div>
      <div className={cx("right")}>
        <Map
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          setBounds={setBounds}
        />
      </div>
    </header>
  );
}
