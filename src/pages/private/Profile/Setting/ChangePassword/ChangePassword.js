import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ChangePassword.module.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "src/component/Button";

const cx = classNames.bind(styles);
export default function ChangePassword() {
  const formikRef = useRef(null);

  const handleSubmit = async () => {};
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Fanpage</h3>
      <Formik
        innerRef={formikRef}
        initialValues={{
          oldpassword: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          oldpassword: Yup.string().required("This field must have value"),
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
                name="old password"
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
          <Button primary className={cx("button-form")} type="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
