import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "../FormAccounts.module.scss";
import Button from "../../../../component/Button";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { auth } from "../../../../service/Firebase/config";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
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
        innerRef={formikRef}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => {
          handleSubmit();
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
        <Form autocomplete="off" onSubmit={handleSubmit}>
          {/* Email */}
          <div className={cx("form-group")}>
            <div className={cx("input-block")}>
              <input
                onChange={handleInputs}
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
              <input
                className={cx("input-text")}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleInputs}
              />
            </div>
            <div className={cx("error-message")}>
              <ErrorMessage name="password" />
            </div>
          </div>
          {/* Hiển thị trạng thái đăng nhập, đăng ký */}
          {/* <div
            ref={messageRef}
            style={{ color: "red", fontSize: "1.4rem" }}
            className={cx("error-message")}
          >
            {messageError}
          </div> */}

          <Button
            primary
            className={cx("button-form")}
            onClick={() => {
              handleSubmit();
            }}
            type="submit"
          >
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
