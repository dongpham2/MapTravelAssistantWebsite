import React, { useState } from "react";
import styles from "./Fanpage.module.scss";
import classNames from "classnames/bind";
import InputField from "src/pages/private/FanPage/Content/components/ProfileFanpage/FormEdit/InputField";
import DropDown from "src/component/Input/DropDown/DropDown";
import Input from "src/component/Input/Input";

const pricesValue = [
  {
    value: "1",
    name: "VND",
  },
  {
    value: "2",
    name: "USA",
  },
  {
    value: "3",
    name: "EUR",
  },
  {
    value: "4",
    name: "Yen",
  },
  {
    value: "5",
    name: "Won",
  },
];
const cx = classNames.bind(styles);
export default function Fanage() {
  const [open, setOpen] = useState("12:00");
  const [close, setClose] = useState("12:00");
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Your Fanpage</h3>
      <div className={cx("form-group")}>
        <InputField
          isLabel
          type="text"
          label="Name"
          //   value={profileDetail.userName}
        />
        <InputField
          isLabel
          type="text"
          label="Phone "
          //   value={profileDetail.userName}
        />
        <InputField
          isLabel
          type="text"
          label="Description"
          //   value={profileDetail.userName}
        />
        <InputField
          isLabel
          type="text"
          label="Website"
          //   value={profileDetail.userName}
        />
        <div className={cx("services")}>
          <div className={cx("services-desc")}>Time Open</div>
          <div className={cx("services-time")}>
            <div className={cx("time")}>
              Open
              <input
                type="time"
                value={open}
                className={cx("input-time")}
                onChange={(e) => setOpen(e.target.value)}
              />
            </div>
            <span className={cx("time")}>-</span>
            <div className={cx("time")}>
              Close
              <input
                type="time"
                value={close}
                className={cx("input-time")}
                onChange={(e) => setClose(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* service */}
        <div className={cx("services")}>
          <div className={cx("services-desc")}>Services Price</div>
          <div className={cx("services-price")}>
            <div className={cx("price-group")}>
              <Input
                placeholder="price"
                primary
                className={cx("input-field")}
              />
              <DropDown title="Prices" data={pricesValue} />
            </div>
            <span className={cx("price-group")}>-</span>

            <div className={cx("price-group")}>
              <Input placeholder="to" primary className={cx("input-field")} />
              <DropDown title="Prices" data={pricesValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
