import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DetailBar.module.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PlaceDetails from "../PlaceDetails";
const cx = classNames.bind(styles);

export default function DetailBar() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    {
      name: "Cool Place",
      follower: "2001",
      address: "122 Le Duan, Hai Chai, Da Nang",
      firstPrice: "100",
      lastPrice: "10000",
      open: "8:00",
      close: "20:00",
      phone: "0853390932",
      desc: "Welcome to our restaurant, where we aim to delight your senses and satisfy your cravings with our delicious and diverse menu. As you enter, you will be greeted by a warm and inviting atmosphere, with soft lighting, cozy seating arrangements, and tasteful decor that exudes a comfortable and sophisticated vibe. Our friendly staff will be ready to welcome you and guide you through our menu, which features a range of culinary delights from different parts of the world. Whether you are in the mood for a hearty breakfast...",
    },
    {
      name: "Hawoa Food",
      follower: "20000",
      address: "08-10 Hoàng Hoa Thám, Hai Chai, Da Nang",
      firstPrice: "50",
      lastPrice: "200",
      open: "12:00",
      close: "22:00",
      phone: "0356836753",
      desc: "Welcome to our restaurant, where we aim to delight your senses and satisfy your cravings with our delicious and diverse menu. As you enter, you will be greeted by a warm and inviting atmosphere, with soft lighting, cozy seating arrangements, and tasteful decor that exudes a comfortable and sophisticated vibe. Our friendly staff will be ready to welcome you and guide you through our menu, which features a range of culinary delights from different parts of the world. Whether you are in the mood for a hearty breakfast...",
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <h4 className={cx("header")}> Restaurants & Cofffee House around you </h4>
      <div className={cx("dropdown-form")}>
        <div className={cx("form-control")}>
          <div className={cx("form-title")}>
            <label>Type</label>
          </div>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className={cx("select-form")}
          >
            <option>Restaurants</option>
            <option>Coffe house</option>
          </select>{" "}
        </div>
        <div className={cx("form-control")}>
          <div className={cx("form-title")}>
            <label>Rating</label>
          </div>
          <select
            value={rating}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className={cx("select-form")}
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <Row className={cx("list")}>
        {places.map((place, i) => (
          <div className={cx("list-store")}>
            <Row xs={12} key={i}>
              <PlaceDetails place={place} />
            </Row>
          </div>
        ))}
      </Row>
    </header>
  );
}
