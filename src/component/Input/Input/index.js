import classNames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({
  leftIcon,
  rightIcon,
  className,
  primary,
  secondary,
  selected,
  checkbox,
  rounded,
  bordered,
  disabled,
  children,
  name,
  ...passprops
}) {
  const classes = cx("wrapper", {
    [className]: className,
    disabled,
    rounded,
    checkbox,
    primary,
    secondary,
    name,
    selected,
  });

  return (
    <div className={classes}>
      {leftIcon && (
        <span
          style={{ paddingLeft: "20px", cursor: "pointer" }}
          className={cx("icon")}
        >
          {leftIcon}
        </span>
      )}
      <input {...passprops} className={cx("input")}>
        {children}
      </input>
      {rightIcon && (
        <span
          style={{
            paddingRight: "20px",
            cursor: "pointer",
          }}
          className={cx("icon")}
        >
          {rightIcon}
        </span>
      )}
    </div>
  );
}

export default Input;
