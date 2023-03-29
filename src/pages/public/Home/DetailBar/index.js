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
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Best Steak" },
    { name: "Best Steak" },
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
