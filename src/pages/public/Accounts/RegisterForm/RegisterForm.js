import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "../FormAccounts.module.scss";
import Button from "../../../../component/Button";
import { useDispatch } from "react-redux";
import { actionSignup } from "src/redux/actions/authen";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

export default function RegisterForm() {
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  // const messageRef = useRef(null);
  const toastifyOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const handleSubmit = () => {
    const { fullname, email, password } = formikRef.current.values;
    dispatch(actionSignup({ fullname, email, password }));
    toast.success("Signin successfully", toastifyOptions);
  };
  return (
    <div className={cx("wrapper")}>
      <Formik
        innerRef={formikRef}
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={() => {
          handleSubmit();
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("This field must have value!"),
          email: Yup.string()
            .email("Invalid email")
            .required("This field must have value!"),
          password: Yup.string()
            .min(6, "At least 6 characters!")
            .required("This field must have value!"),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password did not match!")
            .required("This field must have value!"),
        })}
      >
        <Form>
          {/* Name */}
          <div className={cx("form-group")}>
            <div className={cx("input-block")}>
              <Field
                className={cx("input-text")}
                name="fullname"
                type="fullname"
                placeholder="Fullname"
              />
            </div>
            <div className={cx("error-message")}>
              <ErrorMessage name="fullname" />
            </div>
          </div>
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
