import React, { useState } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import InputField from "../FanPage/Content/components/ProfileFanpage/FormEdit/InputField";
import FormUpload from "./FormUpload/FormUpload";
import Loading from "src/component/Loading/Loading";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);
export default function Profile() {
  const auth = useSelector((state) => state.auth);
  const userInfor = auth.user;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h2 className={cx("heading")}>Profile</h2>
        <div className={cx("form-group-left")}>
          <InputField
            isLabel
            type="text"
            label="Full Name"
            value={userInfor.fullName}
          />
          <InputField
            isLabel
            type="text"
            label="Gmail"
            value={userInfor.email}
          />
          {isLoading === true && <Loading />}
          <FormUpload data={""} label="Avatar" />
          <InputField
            isLabel
            type="text"
            label="Date of Birth"
            value={userInfor.birth}
          />
          <InputField
            isLabel
            type="text"
            label="Gender"
            value={userInfor.gender}
          />
        </div>
      </div>
    </div>
  );
}
