import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "../FormAccounts.module.scss";
import Button from "../../../../component/Button";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
// import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Loginform() {
  // const navigate = useNavigate();
  // const handleNavigateForgotForm = () => {
  //   navigate("/forgotPassword");
  // };
  return (
    <div className={cx("wrapper")}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email")
            .required("This field must have value"),
          password: Yup.string()
            .min(6, "At least 6 characters")
            .required("This field must have value"),
        })}
      >
        <Form autocomplete="off">
          {/* Email */}
          <div className={cx("form-group")}>
            <div className={cx("input-block")}>
              <Field
                className={cx("input-text")}
                name="email"
                type="email"
                placeholder="Email Address"
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

          <Button primary className={cx("button-form")}>
            Login
          </Button>
        </Form>
      </Formik>

      <div className={cx("forgot-password")}>
        <span>Forgot password?</span>
      </div>
    </div>
  );
}
