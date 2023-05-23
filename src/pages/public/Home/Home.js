import React, { useEffect, useState } from "react";
import Map from "./Map";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import DetailBar from "./DetailBar";
import getPlacesData from "../../../api/googleClientApi";

const cx = classNames.bind(styles);
export default function Home() {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getPlacesData();
    setIsLoading(false);
  }, []);

  return (
    <header className={cx("wrapper")}>
      {/* {isLoading === true && <Loading />} */}
      <div className={cx("left")}>
        <DetailBar
          onChildClick={(child) => {
            setChildClicked(child);
          }}
          isLoading={isLoading}
        />
      </div>
      <div className={cx("right")}>
        <Map
          // setCoordinates={setCoordinates}
          // coordinates={coordinates}
          // setBounds={setBounds}
          onChildClick={(child) => {
            setChildClicked(child);
          }}
        />
      </div>
    </header>
  );
}
