import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Ratting.module.scss";
import { FaStar } from "react-icons/fa";
import images from "src/assets/images";
import TextEditor from "src/component/EditorText/EditorText";
import UserComments from "../PostFanpage/components/CardArticle/UserComments/UserComments";

const cx = classNames.bind(styles);
export default function Ratting() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");
  return <div className={cx("wrapper")}></div>;
}
