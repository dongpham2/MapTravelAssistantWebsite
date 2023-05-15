import React, { useRef, useState } from "react";
import styles from "./CreateFanpage.module.scss";
import classNames from "classnames/bind";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "src/component/Button";
import Input from "src/component/Input/Input";
import DropDown from "src/component/Input/DropDown/DropDown";
import TextEditor from "src/component/EditorText/EditorText";
import Map from "src/pages/public/Home/Map";
import Fanage from "./Fanpage/Fanpage";
import { getObjectCreateFanpages } from "./utility";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateFangpage } from "src/redux/actions/fanpage";
import { Col, Row } from "react-bootstrap";
import L from "leaflet";
import FormUploadBanner from "../../FormUploadBanner/FormUploadBanner";

const cx = classNames.bind(styles);
const pricesValue = [
  {
    value: "1",
    name: "VND",
  },
  {
    value: "2",
    name: "USA",
  },
  {
    value: "3",
    name: "EUR",
  },
  {
    value: "4",
    name: "Yen",
  },
  {
    value: "5",
    name: "Won",
  },
];

export default function CreateFanpage() {
  const formikRef = useRef(null);
  const messageRef = useRef(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [open, setOpen] = useState("12:00");
  const [close, setClose] = useState("12:00");
  const [content, setContent] = useState("");
  const [selectForm, setSelectForm] = useState({
    denomina: "",
  });
  const fanpage = useSelector((state) => state.fanpage);
  const dispatch = useDispatch();

  // submit data create fanpage
  const handleCreatePage = () => {
    const { name, description, phone, website, priceStart, priceEnd } =
      formikRef.current.values;
    const selectValues = { ...selectForm };
    // console.log({
    //   name,
    //   description,
    //   phone,
    //   website,
    //   priceStart,
    //   priceEnd,
    //   selectValues,
    // });
    dispatch(
      actionCreateFangpage(
        getObjectCreateFanpages(
          name,
          description,
          phone,
          website,
          content,
          open,
          close,
          priceStart,
          priceEnd
        ),
        selectValues
      )
    );
  };
  const handleChangeSelect = (value, name, nameSelect) => {
    setSelectForm((prev) => {
      return { ...prev, [nameSelect]: name };
    });
  };

  // const handleChangeCoordinates = () => {
  //   let mapOptions = {
  //     center: [51.958, 9.141],
  //     zoom: 10,
  //   };
  //   let map = new L.map("map", mapOptions);
  //   let layer = new L.TileLayer(
  //     "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   );
  //   map.addLayer(layer);
  //   let marker = null;
  //   map.on("click", (event) => {
  //     if (marker !== null) {
  //       map.removeLayer(marker);
  //     }
  //     marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map);
  //     setLat(event.latlng.lat);
  //     setLon(event.latlng.lon);
  //   });
  // };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Fanpage</h3>
      {fanpage ? (
        <Formik
          innerRef={formikRef}
          initialValues={{
            name: "",
            phone: "",
            website: "",
            priceStart: "",
            priceEnd: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("This field must have value"),
            phone: Yup.number()
              .typeError("That doesn't look like a phone number")
              .positive("A phone number can't start with a minus")
              .integer("A phone number can't include a decimal point")
              .min(9)
              .required("Please enter your phone number"),
            website: Yup.string()
              .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                "Enter correct url!"
              )
              .required("Please enter website"),
            priceStart: Yup.number()
              .required("Enter Prices")
              .max(1000000000, "To big")
              .min(0, "Not negative prices"),
            priceEnd: Yup.number()
              .required("Enter Prices")
              .max(1000000000, "To big")
              .min(0, "Not negative prices"),
          })}
        >
          <Form autocomplete="off">
            <div className={cx("form-group")}>
              <div className={cx("input-block")}>
                <div className={cx("input-desc")}>(*) Choose your Banner</div>
                <FormUploadBanner />
              </div>
              <div className={cx("input-block")}>
                <div className={cx("input-desc")}>
                  (*) Your Page is where people go to learn more about you. Make
                  sure yours has all the information they may need.
                </div>
                <Field
                  className={cx("input-text")}
                  name="name"
                  type="name"
                  placeholder="Page name"
                />
                <div className={cx("error-message")}>
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
            <div className={cx("form-group")}>
              <div className={cx("input-block")}>
                <div className={cx("input-desc")}>
                  (*) Use the name of your business, brand or organization, or a
                  name that helps explain your Page.
                </div>
                <div className={cx("text-desc")}>
                  <TextEditor setContentBlog={setContent} sHidderTools={true} />
                </div>
              </div>
            </div>
            <div className={cx("form-group")}>
              <div className={cx("input-block")}>
                <Field
                  className={cx("input-text")}
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                />
                <div className={cx("error-message")}>
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <div className={cx("form-group")}>
              <div className={cx("input-block")}>
                <Field
                  className={cx("input-text")}
                  name="website"
                  type="website"
                  placeholder="Your website"
                />
                <div className={cx("error-message")}>
                  <ErrorMessage name="website" />
                </div>
              </div>
            </div>
            <div className={cx("services")}>
              <div className={cx("services-desc")}>Time Open</div>
              <div className={cx("services-time")}>
                <div className={cx("time")}>
                  Open
                  <input
                    type="time"
                    value={open}
                    className={cx("input-time")}
                    onChange={(e) => setOpen(e.target.value)}
                  />
                </div>
                <span className={cx("time")}>-</span>
                <div className={cx("time")}>
                  Close
                  <input
                    type="time"
                    value={close}
                    className={cx("input-time")}
                    onChange={(e) => setClose(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={cx("services")}>
              <div className={cx("services-desc")}>Services Price</div>
              <Row>
                <Col>
                  <div className={cx("services-price")}>
                    <div className={cx("services-field")}>
                      <Field
                        className={cx("input-prices")}
                        name="priceStart"
                        type="priceStart"
                        placeholder="Prices"
                      />
                      <div className={cx("error-message")}>
                        <ErrorMessage name="priceStart" />
                      </div>
                    </div>
                    <span className={cx("price-dot")}>-</span>
                    <div className={cx("services-field")}>
                      <Field
                        className={cx("input-prices")}
                        name="priceEnd"
                        type="priceEnd"
                        placeholder="Prices"
                      />
                      <div className={cx("error-message")}>
                        <ErrorMessage name="priceEnd" />
                      </div>
                    </div>
                    <DropDown
                      onChangeSelect={(value, name) =>
                        handleChangeSelect(value, name, "denomina")
                      }
                      title="Prices"
                      data={pricesValue}
                      className={cx("prices-option")}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className={cx("location")}>
              <div className={cx("address")}>Pin Your Location</div>
              <div className={cx("coordinates")}>
                <Input placeholder="latitude" primary value={lat} />
                <Input placeholder="longtitude" primary value={lon} />
              </div>
              <div id="map"></div>
              {/* <Map /> */}
            </div>
            <div className={cx("btn")}>
              <Button
                primary
                onClick={() => {
                  handleCreatePage();
                }}
              >
                Create
              </Button>
            </div>
          </Form>
        </Formik>
      ) : (
        <Fanage />
      )}
    </div>
  );
}
