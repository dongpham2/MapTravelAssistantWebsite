import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../../../component/Button";

export default function Header() {
  return (
    <div>
      <h1>This is header</h1>
      <Button>Đăng ký</Button>
    </div>
  );
}
