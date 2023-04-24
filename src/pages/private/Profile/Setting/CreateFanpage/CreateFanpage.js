import React, { useRef, useState } from "react";
import styles from "./CreateFanpage.module.scss";
import classNames from "classnames/bind";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "src/component/Button";
import DataTime from "src/component/DateTime/DataTime";
import Input from "src/component/Input/Input";
import DropDown from "src/component/Input/DropDown/DropDown";
import TextEditor from "src/component/EditorText/EditorText";
import Map from "src/pages/public/Home/Map";

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
  const [time, setTime] = useState("12:00");
  const [content, setContent] = useState("");
  const handleCreatePage = () => {
    // const { name, description, phone, website } = formikRef.current.values;
    // console.log(name, description, phone, website);
  };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Fanpage</h3>
      <Formik
        innerRef={formikRef}
        initialValues={{
          name: "",
          description: "",
          phone: "",
          website: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("This field must have value"),
          description: Yup.string()
            .min(12, "At least 12 characters")
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
        })}
      >
        <Form autocomplete="off">
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
                <TextEditor setContentBlog={setContent} sHidderTools={true} />
              </div>
              {/* <Field
                className={cx("input-text")}
                name="description"
                type="description"
                placeholder="Description"
              />
              <div className={cx("error-message")}>
                <ErrorMessage name="description" />
              </div> */}
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
                  value={time}
                  className={cx("input-time")}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <span className={cx("time")}>-</span>
              <div className={cx("time")}>
                Close
                <input type="time" value={time} className={cx("input-time")} />
              </div>
            </div>
          </div>
          <div className={cx("services")}>
            <div className={cx("services-desc")}>Services Price</div>
            <div className={cx("services-price")}>
              <div className={cx("price-group")}>
                <Input
                  placeholder="price"
                  primary
                  className={cx("input-field")}
                />
                <DropDown title="Prices" data={pricesValue} />
              </div>
              <span className={cx("price-group")}>-</span>

              <div className={cx("price-group")}>
                <Input placeholder="to" primary className={cx("input-field")} />
                <DropDown title="Prices" data={pricesValue} />
              </div>
            </div>
          </div>
          <div className={cx("location")}>
            <div className={cx("address")}>Pin Your Location</div>
            <Map />
          </div>
          <Button
            primary
            onClick={() => {
              handleCreatePage();
            }}
            className={cx("btn")}
          >
            Create
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
