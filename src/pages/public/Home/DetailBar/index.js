import React, { useState, useEffect, createRef } from "react";
import classNames from "classnames/bind";
import styles from "./DetailBar.module.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PlaceDetails from "../PlaceDetails";
import DropDown from "src/component/Input/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { actionGetAllFangpage } from "src/redux/actions/fanpage";
import Loading from "src/component/Loading/Loading";
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

export default function DetailBar(childClicked, isLoading) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [dataRender, setDataRender] = useState([]);
  const [elRefs, setElRefs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // const refs = Array(dataRender.length)
    //   .fill()
    //   .map((_, i) => {
    //     refs[i] || createRef();
    //   });
    // setElRefs(refs);
  }, [dataRender]);

  useEffect(() => {
    dispatch(
      actionGetAllFangpage({
        callBack(data) {
          if (data.message === "GET SUCCESSFUL") {
            setDataRender(data.data);
            // const result = data.data;
            // console.log(result);
          }
        },
      })
    );
  }, []);
  return (
    <header className={cx("wrapper")}>
      <h3 className={cx("heading")}>Places & Food around you </h3>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={cx("type")}>Type</div>
          <div className={cx("option-place")}>
            <div className={cx("places")}>
              <DropDown title="Places" data={dataPlaces} />
            </div>
            <div className={cx("ratting")}>
              <DropDown title="Ratting" data={dataRatting} />
            </div>
          </div>
          <Row className={cx("list")}>
            {dataRender.map((data, i) => (
              <div className={cx("list-store")}>
                <Row xs={12} key={i}>
                  <PlaceDetails
                    data={data}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Row>
              </div>
            ))}
          </Row>
        </>
      )}
    </header>
  );
}
