import React from "react";
import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
import { useState, useRef } from "react";
import Button from "src/component/Button";
import { Col } from "react-bootstrap";

const cx = classNames.bind(styles);
export default function InputField({ isLabel, label, icon, type, value }) {
  const [inputValue, setInputValue] = useState(value);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className={cx("wrapper")}>
      {!isLabel ? (
        <div className={cx("input-group")}>
          <span className={cx("icon")}>{icon}</span>
          <input
            ref={inputRef}
            className={cx("input")}
            type={type}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      ) : (
        <div className={cx("input-label")}>
          <div className={cx("input-group-label")}>
            <label className={cx("form-group-lablel")}>{label}</label>
            <input
              ref={inputRef}
              className={cx("form-input-label")}
              type={type}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              disabled
            />
          </div>
          <Col className={cx("form-group-right")} md={{ offset: 1 }}>
            {visibleUpdate ? (
              <div className={cx("btn")}>
                <Button rounded type="submit" saveInput small>
                  Save
                </Button>
                <Button
                  rounded
                  cancel
                  small
                  onClick={() => {
                    setVisibleUpdate(false);
                    setInputValue(value);
                    inputRef.current.disabled = true;
                    console.log(inputRef.current.disabled);
                  }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                edit
                rounded
                small
                onClick={() => {
                  setVisibleUpdate(true);
                  inputRef.current.disabled = false;
                  inputRef.current.focus();
                  console.log(inputRef.current.disabled);
                }}
              >
                Edit
              </Button>
            )}
          </Col>
        </div>
      )}
    </div>
  );
}
