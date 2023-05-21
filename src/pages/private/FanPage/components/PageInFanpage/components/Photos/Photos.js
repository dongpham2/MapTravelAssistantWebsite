import React from "react";
import classNames from "classnames/bind";
import styles from "./Photos.module.scss";
import ImagesPhoto from "./ImagesPhoto/ImagesPhoto";
import { Col, Row } from "react-bootstrap";

const cx = classNames.bind(styles);

const imgRef = [
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fdrinks&psig=AOvVaw1I-f0sB9tWjo0TlutCpCdP&ust=1684552519707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCKl6a1gP8CFQAAAAAdAAAAABAE",
  },
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fdrinks&psig=AOvVaw1I-f0sB9tWjo0TlutCpCdP&ust=1684552519707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCKl6a1gP8CFQAAAAAdAAAAABAE",
  },
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpnghunter.com%2Fpng%2Fcocktail-42%2F&psig=AOvVaw1I-f0sB9tWjo0TlutCpCdP&ust=1684552519707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCKl6a1gP8CFQAAAAAdAAAAABAJ",
  },
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcocktail-png&psig=AOvVaw1I-f0sB9tWjo0TlutCpCdP&ust=1684552519707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCKl6a1gP8CFQAAAAAdAAAAABAR",
  },
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fdrinks&psig=AOvVaw1I-f0sB9tWjo0TlutCpCdP&ust=1684552519707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCKl6a1gP8CFQAAAAAdAAAAABAE",
  },
];
export default function Photos() {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Photos</h3>
      <div className={cx("photo")}>
        <ImagesPhoto />
        {imgRef.map((imgRefs, i) => {
          <Row key={i}>
            <ImagesPhoto />
          </Row>;
        })}
      </div>
    </div>
  );
}
