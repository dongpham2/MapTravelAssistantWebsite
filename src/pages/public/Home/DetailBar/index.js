import React, { useState, useEffect, createRef } from "react";
import classNames from "classnames/bind";
import styles from "./DetailBar.module.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PlaceDetails from "../PlaceDetails";
import DropDown from "src/component/Input/DropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_GET_ALL_FANGPAGE,
  actionGetAllFangpage,
} from "src/redux/actions/fanpage";
import Loading from "src/component/Loading/Loading";
const cx = classNames.bind(styles);
const dataPlaces = [
  {
    value: 1,
    name: "All",
  },
  {
    value: 2,
    name: "restaurant",
  },
  {
    value: 3,
    name: "coffee",
  },
  // {
  //   value: 4,
  //   name: "both",
  // },
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

export default function DetailBar({ childClicked, isLoading }) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [fanpagesAvailable, setFanpagesAvailable] = useState([]);
  const fanpages = useSelector((state) => state.fanpage) || [];
  const [dataRender, setDataRender] = useState([]);
  const [elRefs, setElRefs] = useState([]);
  const dispatch = useDispatch();
  const handleFilter = (type, nameValue) => {
    // console.log("fanpagesAvailable", fanpagesAvailable);
    // console.log("type", nameValue);
    if (nameValue.toUpperCase() === "ALL") {
      dispatch({
        type: ACTION_GET_ALL_FANGPAGE,
        payload: fanpagesAvailable,
      });
      return;
    } else {
      const result = fanpagesAvailable.filter(
        (_elt) => _elt.type.toUpperCase() === nameValue.toUpperCase()
      );
      dispatch({
        type: ACTION_GET_ALL_FANGPAGE,
        payload: result,
      });
    }
  };

  useEffect(() => {
    // const refs = Array(dataRender.length)
    //   .fill()
    //   .map((_, i) => {
    //     refs[i] || createRef();
    //   });
    // setElRefs(refs);
  }, [dataRender]);

  useEffect(() => {
    setLoading(true);
    dispatch(actionGetAllFangpage());
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    setFanpagesAvailable(fanpages);
    setLoading(false);
  }, []);

  return (
    <header className={cx("wrapper")}>
      {!loading ? (
        <>
          <h3 className={cx("heading")}>Places & Food around you </h3>
          <div className={cx("type")}>Type</div>
          <div className={cx("option-place")}>
            <div className={cx("places")}>
              <DropDown
                title="Places"
                data={dataPlaces}
                onChangeSelect={handleFilter}
              />
            </div>
            <div className={cx("ratting")}>
              <DropDown title="Ratting" data={dataRatting} />
            </div>
          </div>
          <Row className={cx("list")}>
            {fanpages !== undefined
              ? fanpages.map((data, i) => (
                  <div className={cx("list-store")}>
                    <Row xs={12} key={i}>
                      <PlaceDetails
                        data={data}
                        selected={Number(childClicked) === i}
                        refProp={elRefs[i]}
                      />
                    </Row>
                  </div>
                ))
              : null}
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </header>
  );
}
