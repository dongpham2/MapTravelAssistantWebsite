import React, { useEffect, useState } from "react";
import Map from "./Map";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import DetailBar from "./DetailBar";
import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function Home() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    getPlacesData();
    // .then((data) =>{
    //   console.log(data);
    //   setPlaces(data)
    // })
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("left")}>
        <DetailBar />
      </div>
      <div className={cx("right")}>
        <Map />
      </div>
    </header>
  );
}
