import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";
import Button from "src/component/Button";
import Input from "src/component/Input/Input";

const cx = classNames.bind(styles);
export default function Bio() {
  const [isBio, setIsBio] = useState(false);

  const handleBioChange = () => {
    setIsBio(!isBio);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3 className={cx("introduce")}>Introduce</h3>
        {!isBio ? (
          <Button bio onClick={handleBioChange}>
            Add Bio
          </Button>
        ) : (
          <div className={cx("bio-infor")}>
            <Input primary />
            <div className={cx("btn")}>
              <Button small cancel onClick={handleBioChange}>
                Cancel
              </Button>
              <Button small saveInput>
                Save
              </Button>
            </div>
            {/* <span>Out restaurant provide a delicous food to every one</span> */}
          </div>
        )}
      </div>
    </div>
  );
}
