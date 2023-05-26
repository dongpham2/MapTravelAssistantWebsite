import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileFanpage.module.scss";
import Button from "../../../../../../component/Button";
import { FaStar } from "react-icons/fa";
import images from "../../../../../../assets/images";
import Introduction from "./Introduction/Introduction";
import InputField from "./FormEdit/InputField";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";
import Loading from "src/component/Loading/Loading";

const cx = classNames.bind(styles);

export default function ProfileFanpage() {
  const [fanpage, setFanpage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const parameters = useParams();
  // console.log("check fanpage", fanpage);
  // state controller
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const isCreator = auth.user.page?._id === parameters.id ? true : false;
  // console.log("isCreator", isCreator);
  useEffect(() => {
    const getFanpage = async () => {
      setLoading(true);
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${id}`);
      setFanpage(res.data.data);
      setLoading(false);
    };
    getFanpage();
  }, []);
  return (
    <div className={cx("wrapper")}>
      {!loading ? (
        <>
          <Introduction />
          {/* content */}
          <div className={cx("content")}>
            <div className={cx("input-group")}>
              <span className={cx("icon")}>
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <div className={cx("detail")}>
                {fanpage.priceStart} {fanpage.denomina}
              </div>
              <span className={cx("dot")}>-</span>
              <div className={cx("detail")}>
                {fanpage.priceEnd} {fanpage.denomina}
              </div>
            </div>
            <div className={cx("input-group")}>
              <span className={cx("icon")}>
                <ion-icon name="globe-outline"></ion-icon>
              </span>
              <div className={cx("detail")}>{fanpage.website} </div>
            </div>
            <div className={cx("input-group")}>
              <span className={cx("icon")}>
                <ion-icon name="at-outline"></ion-icon>
              </span>
              <div className={cx("detail")}>
                {fanpage.priceStart} {fanpage.open}
              </div>
              <span className={cx("dot")}>-</span>
              <div className={cx("detail")}>
                {fanpage.priceEnd} {fanpage.close}
              </div>
            </div>
            <div className={cx("input-group")}>
              <span className={cx("icon")}>
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <div className={cx("detail")}>{fanpage.phone} </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
