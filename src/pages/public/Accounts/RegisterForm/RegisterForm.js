import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "../FormAccounts.module.scss";
import Button from "../../../../component/Button";

const cx = classNames.bind(styles);

export default function RegisterForm() {
  return (
    <div className={cx("wrapper")}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email không hợp lệ")
            .required("Mục này không được để trống"),
          password: Yup.string()
            .min(6, "Mật khẩu phải có ít nhất là 6 ký tự!")
            .required("Mục này không được để trống!"),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp!")
            .required("Mục này không được để trống!"),
        })}
      >
        <Form>
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
          <Button primary className={cx("button-form")}>
            Sign Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
