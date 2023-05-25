import React, { useEffect, useState } from "react";
import Map from "./Map";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import DetailBar from "./DetailBar";
import getPlacesData from "../../../api/googleClientApi";

const cx = classNames.bind(styles);
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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
        <DetailBar childClicked={childClicked} isLoading={isLoading} />
      </div>
      <div className={cx("right")}>
        <Map setChildClicked={setChildClicked} />
      </div>
    </header>
  );
}
