import React, { useRef, useState } from "react";
import styles from "./CreateFanpage.module.scss";
import classNames from "classnames/bind";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "src/component/Button";
import Input from "src/component/Input/Input";
import DropDown from "src/component/Input/DropDown/DropDown";
import TextEditor from "src/component/EditorText/EditorText";
import Fanage from "./Fanpage/Fanpage";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateFangpage } from "src/redux/actions/fanpage";
import { Col, Row } from "react-bootstrap";
import L, { latLngBounds } from "leaflet";
import FormUploadBanner from "../../FormUploadBanner/FormUploadBanner";
import Map from "src/pages/public/Home/Map/Leaflet/LeafletMap";
import SearchBox from "src/pages/public/Home/Map/SearchBox/SearchBox";
import "leaflet/dist/leaflet.css";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import FormUpload from "../../FormUpload/FormUpload";
import { storage } from "src/service/Firebase/firebase";
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
const typeStore = [
  {
    value: "6",
    name: "coffee",
  },
  {
    value: "7",
    name: "restaurant",
  },
  {
    value: "8",
    name: "coffee & restaurant",
  },
];

export default function CreateFanpage() {
  const id = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).userID
    : "";
  const [selectPosition, setSelectPosition] = useState(null);
  const [file, setFile] = useState({
    pre: "",
    data: "",
  });

  const formikRef = useRef(null);
  const messageRef = useRef(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [open, setOpen] = useState("12:00");
  const [close, setClose] = useState("12:00");
  const [description, setDescription] = useState("");
  const [selectForm, setSelectForm] = useState({
    denomina: "",
    type: "",
  });
  // const fanpage = useSelector((state) => state.fanpage);
  // const [fanpage, setFanpage] = useState(localStorage.getItem("isFanpage"));
  const fanpage = localStorage.getItem("isFanpage");
  const dispatch = useDispatch();

  // submit data create fanpage
  const handleCreatePage = () => {
    const { name, phone, website, priceStart, priceEnd } =
      formikRef.current.values;
    console.log(formikRef.current.values);
    // const selectValues = { ...selectForm };
    // console.log(selectValues);
    console.log({
      userID: id,
      img: file?.pre,
      name,
      description,
      phone,
      website,
      open,
      close,
      priceStart,
      priceEnd,
      ...selectForm,
      lat: selectPosition?.lat,
      lon: selectPosition?.lon,
    });
    handleSubmitImages();
    dispatch(
      actionCreateFangpage({
        userID: id,
        name,
        description,
        phone,
        website,
        open,
        close,
        priceStart,
        priceEnd,
        ...selectForm,
        lat: selectPosition?.lat,
        lon: selectPosition?.lon,
      })
    );
  };
  const handleSetFile = (file) => {
    setFile(file);
  };

  const handleSubmitImages = async (e) => {
    const imageRef = ref(storage, `images/${file.data + v4()}`);
    uploadBytes(imageRef, file.data)
      .then(() => {
        getDownloadURL(imageRef)
          .then((file) => {
            setFile({ pre: file, data: "" });
            toast.success("upload successfully!");
          })
          .catch((error) => {
            console.log(error.message, "error getting url");
            toast.error("failed to upload");
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("failed to upload");
      });
    // setVisibleControls(false);
  };

  const handleChangeSelect = (value, name, nameSelect) => {
    setSelectForm((prev) => {
      return { ...prev, [nameSelect]: name };
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Fanpage</h3>
      {fanpage === "false" ? (
        <Formik
          innerRef={formikRef}
          initialValues={{
            name: "",
            phone: "",
            website: "",
            priceStart: "",
            priceEnd: "",
          }}
          onSubmit={handleCreatePage}
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
            website: Yup.string().matches(
              /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
              "Enter correct url!"
            ),
            // .required("Please enter website"),
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
          <Form
            autocomplete="off"
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          >
            <div className={cx("form-group")}>
              <div className={cx("input-block")}>
                <div className={cx("input-desc")}>(*) Upload your banner</div>
                <FormUploadBanner setFile={handleSetFile} file={file} />
              </div>
            </div>
            <div className={cx("form-group")}>
              <div className={cx("input-block")}>
                <div className={cx("input-desc")}>(*) Upload your avatar</div>
                <FormUpload />
              </div>
            </div>
            <div className={cx("form-group")}>
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
                  <TextEditor
                    setContentBlog={setDescription}
                    sHidderTools={true}
                  />
                </div>
              </div>
            </div>
            <div className={cx("form-create")}>
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
            </div>

            <div className={cx("form-create")}>
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
              <div classNam e={cx("services")}>
                <div className={cx("services-desc")}>Type</div>
                <div className={cx("type-option")}>
                  <DropDown
                    onChangeSelect={(value, name) =>
                      handleChangeSelect(value, name, "type")
                    }
                    title="Type"
                    data={typeStore}
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
                      title="Denomina"
                      data={pricesValue}
                      className={cx("prices-option")}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            {/* <div className={cx("location")}>
              <div className={cx("address")}>Pin Your Location</div>
              <Map />
            </div> */}
            <div>
              <div>
                <SearchBox
                  selectPosition={selectPosition}
                  setSelectPosition={setSelectPosition}
                />
              </div>
              <div style={{ height: "500px", overflow: "hidden" }}>
                <Map selectPosition={selectPosition} isPosition={false} />
              </div>
            </div>
            <div className={cx("btn")}>
              <Button primary type="submit">
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
