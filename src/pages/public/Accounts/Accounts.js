import React from "react";
import classNames from "classnames/bind";
import styles from "./Accounts.module.scss";
import Container from "./Container/Container";
import images from "../../../assets/images";
import { useSelector } from "react-redux";
import config from "src/config";
import { Navigate } from "react-router";

const cx = classNames.bind(styles);
export default function Accounts() {
  const auth = useSelector((state) => state.auth);
  const roleUser = auth?.user?.role;

  if (roleUser === "admin") {
    return <Navigate to={config.routes.admin} replace />;
  } else if (roleUser === "recruiter") {
    return <Navigate to={config.routes.home} replace />;
  }

  return (
    <div className={cx("wrapper")}>
      {/* {status === "pending" ? <Loading /> : ""} */}
      <Container />
      <img
        alt="background-map-travel"
        className={cx("background-img")}
        src={images.background_login}
      />
    </div>
  );
}
