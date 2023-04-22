import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "../FormAccounts.module.scss";
import Button from "../../../../component/Button";

const cx = classNames.bind(styles);

export default function RegisterForm() {
  const formikRef = useRef(null);
  // const messageRef = useRef(null);
  const handleSubmit = () => {
    if (formikRef.current.isSubmitting) {
      console.log("Chek login", formikRef.current.values);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <Formik
        innerRef={formikRef}
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={() => {
          handleSubmit();
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email")
            .required("This field must have value"),
          password: Yup.string()
            .min(6, "At least 6 characters!")
            .required("This field must have value!"),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password did not match!")
            .required("This field must have value!"),
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
          <Button
            primary
            className={cx("button-form")}
            onSubmit={() => {
              handleSubmit();
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
