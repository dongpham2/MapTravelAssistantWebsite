import React from "react";
import classNames from "classnames/bind";
import styles from "./Accounts.module.scss";
import Container from "./Container/Container";

const cx = classNames.bind(styles);
export default function Accounts() {
  return (
    <div className={cx("wrapper")}>
      {/* {status === "pending" ? <Loading /> : ""} */}

      <Container />
    </div>
  );
}
