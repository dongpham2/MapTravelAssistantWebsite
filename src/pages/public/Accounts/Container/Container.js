import React, { useState } from "react";
import Loginform from "../LoginForm/Loginform";
import classNames from "classnames/bind";
import styles from "./Container.module.scss";
import { Link } from "react-router-dom";
import images from "../../../../assets/images";
import RegisterForm from "../RegisterForm/RegisterForm";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const cx = classNames.bind(styles);

export default function Container() {
  const [form, setForm] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleChangeForm = () => {
    setForm(!form);
  };
  const handleChangeFormStep = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("center")}>
        <div className={cx("header")}>
          <Link>
            <img className={cx("logo")} src={images.logoL} />
          </Link>
        </div>
        {/* have account  */}

        <div className={cx("content")}>
          <div className={cx("form-option")}>
            {form ? (
              <div className={cx("have-account")}>
                <RegisterForm />

                <span className={cx("have-question")}>
                  Do you have an account?
                </span>
                <span
                  className={cx("change-form-btn")}
                  onClick={() => {
                    handleChangeForm();
                  }}
                >
                  Log in
                </span>
              </div>
            ) : (
              <div className={cx("have-account")}>
                <Loginform />
                <div className={cx("forgot-password")}>
                  <span>Forgot password?</span>
                </div>
                <span>Don’t have an account? </span>
                <span
                  className={cx("change-form-btn")}
                  onClick={() => {
                    handleChangeForm();
                  }}
                >
                  Sign up
                </span>
              </div>
            )}
          </div>
        </div>
        {/* dot space */}
        <div className={cx("another-login")}>
          <span>OR</span>
        </div>
        {/* Login with  */}
        <div className={cx("another-party")}>
          <div className={cx("form-option")}>
            <div className={cx("option-icon")}>
              <img src={images.google} className={cx("icon")} />
            </div>
            <span className={cx("option-title")}>Continue with Google</span>
          </div>
          <div className={cx("form-option")}>
            <div className={cx("option-icon")}>
              <img src={images.facebook} className={cx("icon")} />
            </div>
            <span className={cx("option-title")}>Continue with Facebook</span>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
