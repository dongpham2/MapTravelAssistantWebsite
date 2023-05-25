import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ChangePassword.module.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "src/component/Button";
import { useDispatch } from "react-redux";
import { actionResetPass } from "src/redux/actions/authen";

const cx = classNames.bind(styles);
export default function ChangePassword() {
  const formikRef = useRef(null);
  const dispatch = useDispatch();
  const id = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).userID
    : "";
  const handleSubmit = async () => {
    dispatch(
      actionResetPass({
        data: {
          userID: id,
          password: formikRef.current.values.password,
        },
      })
    );
  };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Fanpage</h3>
      <Formik
        innerRef={formikRef}
        initialValues={{
          old_password: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          old_password: Yup.string().required("This field must have value"),
          password: Yup.string()
            .min(6, "At least 6 characters!")
            .required("This field must have value!"),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password did not match!")
            .required("This field must have value!"),
        })}
      >
        <Form autocomplete="off">
          {/* Email */}
          <div className={cx("form-group")}>
            <div className={cx("input-block")}>
              <Field
                className={cx("input-text")}
                name="old_password"
                type="password"
                placeholder="Old password"
              />
            </div>
            <div className={cx("error-message")}>
              <ErrorMessage name="email" />
            </div>
          </div>
          {/* password */}
          <div className={cx("form-group")}>
            <div className={cx("input-block")}>
              <Field
                className={cx("input-text")}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={cx("error-message")}>
              <ErrorMessage name="password" />
            </div>
          </div>
          {/* Confirm password */}
          <div className={cx("form-group")}>
            <div className={cx("input-block")}>
              <Field
                className={cx("input-text")}
                name="passwordConfirm"
                type="password"
                placeholder="Retype password"
              />
            </div>
            <div className={cx("error-message")}>
              <ErrorMessage name="passwordConfirm" />
            </div>
          </div>
          <Button
            primary
            className={cx("button-form")}
            type="submit"
            onClick={() => handleSubmit()}
          >
            ChangePassword
          </Button>
        </Form>
      </Formik>
    </div>
  );
}