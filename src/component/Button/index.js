import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  login = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  cancel = false,
  saveInput = false,
  bio = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  right,
  secondary,
  white,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    login,
    secondary,
    saveInput,
    text,
    disabled,
    rounded,
    cancel,
    bio,
    small,
    large,
    right,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  bio: PropTypes.bool,
  login: PropTypes.bool,
  outline: PropTypes.bool,
  cancel: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  reInput: PropTypes.bool,
  saveInput: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
