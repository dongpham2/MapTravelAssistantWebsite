import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import Input from "../../../component/Input/Input";
import config from "../../../config";
import UserOptions from "./UserOptions";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_ALL_FANGPAGE } from "src/redux/actions/fanpage";

const cx = classNames.bind(styles);
export default function Header() {
  const auth = useSelector((state) => state.auth);
  const fanpages = useSelector((state) => state.fanpage);
  const [fanpagesAvailable, setFanpagesAvailable] = useState([]);
  const dispatch = useDispatch();
  const user = auth?.user;
  const [isVisibleUserOptions, setIsVisibleUserOptions] = useState(false);
  const toggleUserOptions = () => {
    setIsVisibleUserOptions(!isVisibleUserOptions);
  };
  const handleChangeSearchCate = (input) => {
    if (input === "") {
      dispatch({
        type: ACTION_GET_ALL_FANGPAGE,
        payload: fanpagesAvailable,
      });
    }
    const result = fanpagesAvailable.filter((_elt) =>
      _elt.name.toLowerCase().includes(input)
    );
    dispatch({
      type: ACTION_GET_ALL_FANGPAGE,
      payload: result,
    });
    console.log("result:", result);
    // setListContent(result);
  };
  useEffect(() => {
    setFanpagesAvailable(fanpages);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("left")}>
        <Link to={config.routes.home}>
          <img className={cx("logo")} src={images.logoM} alt="Logo" />
        </Link>
      </div>
      <div className={cx("right")}>
        <div className={cx("search")}>
          <Input
            leftIcon={<ion-icon name="search-outline"></ion-icon>}
            primary
            placeholder="Search Places..."
            onChange={(e) => handleChangeSearchCate(e.target.value)}
          />
        </div>
        <div className={cx("notification")}>
          {/* <img src={images.bell} /> */}
          <ion-icon name="notifications-outline"></ion-icon>
        </div>
        {isVisibleUserOptions ? <UserOptions /> : ""}
        {auth && auth.status ? (
          <div
            className={cx("avatar")}
            onClick={() => {
              toggleUserOptions();
            }}
          >
            {user.avatar ? (
              <img
                className={cx("avatar-img")}
                src={auth.user.avatar}
                alt="avt"
              />
            ) : (
              <img src={images.avt_default} className={cx("avatar-img")} />
            )}
          </div>
        ) : (
          <Link to={config.routes.accounts}>
            <Button login>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
