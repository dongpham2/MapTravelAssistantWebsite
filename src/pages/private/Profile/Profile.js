import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import InputField from "../FanPage/Content/components/ProfileFanpage/FormEdit/InputField";
import FormUpload from "./FormUpload/FormUpload";
import Loading from "src/component/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDetailUser, actionUpdateUser } from "src/redux/actions/user";
import CInput from "src/component/CInput/CInput";
import { CButton, CCol, CRow } from "@coreui/react";
import Button from "src/component/Button";

const cx = classNames.bind(styles);
export default function Profile() {
  // const auth = useSelector((state) => state.auth);
  // const userInfor = auth.user;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState();
  const id = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).userID
    : "";
  const [file, setFile] = useState({ preview: "", data: "" });
  const [state, setState] = useState({
    data: {},
    fullName: "",
    email: "",
    avatar: "",
    gender: "",
    birth: "",
  });
  const { fullName, email, avatar, gender, birth } = state;
  useEffect(() => {
    dispatch(
      actionGetDetailUser({
        id,
        callBack(data) {
          // console.log(data.user);
          // setData(data.user);
          setState((preState) => ({
            ...preState,
            fullName: data.user.fullname,
            email: data.user.email,
            avatar: data.user.avatar,
            gender: data.user.gender,
            birth: data.user.birth,
          }));
        },
      })
    );
  }, []);
  const handleChange = (name, value) => {
    setState((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  const handleUpdate = () => {
    dispatch(
      actionUpdateUser({
        id,
        data: {
          fullname: fullName,
          avatar: file?.preview,
          birth,
          gender,
        },
        callBack(data) {
          if (data.message === "UPDATE_USER_SUCCESS") {
            window.location.reload();
          }
        },
      })
    );
    // console.log(state, file);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h2 className={cx("heading")}>Profile</h2>
        <div className={cx("form-group-left")}>
          {/* <InputField
              isLabel
              type="text"
              label="Full Name"
              value={data.fullname}
            />
            <InputField
              isLabel
              type="text"
              label="Gmail"
              isRepair
              value={data.email}
            />
            {isLoading === true && <Loading />}
            <FormUpload data={data.avatar} label="Avatar" />
            <InputField
              isLabel
              type="text"
              label="Date of Birth"
              value={data.birth}
            />
            <InputField
              isLabel
              type="text"
              label="Gender"
              value={data.gender}
            /> */}
        </div>
        <CRow className={cx("form mb-5")}>
          <label className={cx("form--label")}>Full name</label>
          <CInput
            className={cx("form--input")}
            value={fullName}
            onChange={(value) => {
              handleChange("fullName", value);
            }}
          />
        </CRow>
        <CRow className={cx("form mb-5")}>
          <label className={cx("form--label")}>Email</label>
          <CInput
            className={cx("form--input")}
            value={email}
            readOnly={true}
            disabled={true}
          />
        </CRow>
        {isLoading === true && <Loading />}
        <FormUpload
          data={avatar}
          label="Avatar"
          file={file}
          setFile={setFile}
        />
        <CRow className={cx("form mb-5")}>
          <label className={cx("form--label")}>Gender</label>
          <CInput
            className={cx("form--input")}
            value={gender}
            onChange={(value) => {
              handleChange("gender", value);
            }}
          />
        </CRow>
        <CRow className={cx("form mb-5")}>
          <label className={cx("form--label")}>Birth</label>
          <CInput
            className={cx("form--input")}
            value={birth}
            onChange={(value) => {
              handleChange("birth", value);
            }}
          />
        </CRow>
        <CRow className={cx("btn")}>
          <CCol xs={"auto"}>
            <Button primary onClick={handleUpdate}>
              Update
            </Button>
          </CCol>
        </CRow>
      </div>
    </div>
  );
}
