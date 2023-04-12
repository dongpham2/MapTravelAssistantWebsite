import React, { useState } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import InputField from "../FanPage/Content/components/ProfileFanpage/FormEdit/InputField";
import FormUpload from "./FormUpload/FormUpload";
const cx = classNames.bind(styles);
export default function Profile() {
  const [profileDetail, setProfileDetail] = useState({
    userName: "Dong Pham",
    email: "dongpham@gmail.com",
    birth: "21/08/2001",
    gender: "Male",
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div>My Fanpage</div>
        <div>Change password</div>
      </div>
      <div className={cx("right")}>
        <h2 className={cx("heading")}>Profile</h2>
        <div className={cx("form-group-left")}>
          <InputField
            isLabel
            type="text"
            label="Full Name"
            value={profileDetail.userName}
          />
          <InputField
            isLabel
            type="text"
            label="Gmail"
            value={profileDetail.email}
          />
          <FormUpload data={""} label="Avatar" />
          <InputField
            isLabel
            type="text"
            label="Date of Birth"
            value={profileDetail.birth}
          />
          <InputField
            isLabel
            type="text"
            label="Gender"
            value={profileDetail.gender}
          />
        </div>
      </div>
    </div>
  );
}
