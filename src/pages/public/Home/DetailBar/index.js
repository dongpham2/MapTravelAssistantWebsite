import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DetailBar.module.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PlaceDetails from "../PlaceDetails";
import DropDown from "src/component/Input/DropDown/DropDown";
const cx = classNames.bind(styles);

const dataPlaces = [
  {
    value: 1,
    name: "Restaurant",
  },
  {
    value: 2,
    name: "Coffee House",
  },
  {
    value: 3,
    name: "Street Food",
  },
];

const dataRatting = [
  {
    value: 101,
    name: "Above 3.0",
  },
  {
    value: 102,
    name: "Above 4.0",
  },
  {
    value: 103,
    name: "Above 4.5",
  },
];

export default function DetailBar() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // const places = [
  //   {
  //     name: "Cool Place",
  //     address: "122 Le Duan, Hai Chai, Da Nang",
  //     firstPrice: "100",
  //     lastPrice: "10000",
  //     open: "8:00",
  //     close: "20:00",
  //     phone: "0853390932",
  //     desc: "Welcome to our restaurant, where we aim to delight your senses and satisfy your cravings with our delicious and diverse menu. As you enter, you will be greeted by a warm and inviting atmosphere, with soft lighting, cozy seating arrangements, and tasteful decor that exudes a comfortable and sophisticated vibe. Our friendly staff will be ready to welcome you and guide you through our menu, which features a range of culinary delights from different parts of the world. Whether you are in the mood for a hearty breakfast...",
  //   },
  //   {
  //     name: "Hawoa Food",
  //     address: "08-10 Hoàng Hoa Thám, Hai Chai, Da Nang",
  //     firstPrice: "50",
  //     lastPrice: "200",
  //     open: "12:00",
  //     close: "22:00",
  //     phone: "0356836753",
  //     desc: "Welcome to our restaurant, where we aim to delight your senses and satisfy your cravings with our delicious and diverse menu. As you enter, you will be greeted by a warm and inviting atmosphere, with soft lighting, cozy seating arrangements, and tasteful decor that exudes a comfortable and sophisticated vibe. Our friendly staff will be ready to welcome you and guide you through our menu, which features a range of culinary delights from different parts of the world. Whether you are in the mood for a hearty breakfast...",
  //   },
  // ];
  return (
    <header className={cx("wrapper")}>
      <h3 className={cx("heading")}>Places & Food around you </h3>
      <div className={cx("type")}>Type</div>
      <div className={cx("option-place")}>
        <div className={cx("places")}>
          <DropDown title="Places" data={dataPlaces} />
        </div>
        <div className={cx("ratting")}>
          <DropDown title="Ratting" data={dataRatting} />
        </div>
      </div>
      {/* <Row className={cx("list")}>
        {places.map((place, i) => (
          <div className={cx("list-store")}>
            <Row xs={12} key={i}>
              <PlaceDetails />
            </Row>
          </div>
        ))}
      </Row> */}
    </header>
  );
}
