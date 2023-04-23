import React from "react";
import classNames from "classnames/bind";
import styles from "./UserOptions.module.scss";
import { Link } from "react-router-dom";
import config from "../../../../config";
import images from "../../../../assets/images";

const cx = classNames.bind(styles);
function UserOptions({ user }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-left")}>
          <img
            src={images.avt}
            alt="Avatar"
            className={cx("avatar-img", "avatar")}
          />
          {/* <img src={images.avt} alt="Avatar" className={cx("avatar")} /> */}
        </div>
        <div className={cx("header-right")}>
          {/* <div className={cx("user-name")}>{user.fullname}</div>*/}
          <div className={cx("user-name")}>Pham Van Dong</div>
        </div>
      </div>
      <div className={cx("switch-account")}>
        <div className={cx("switch-icon")}>
          <ion-icon name="swap-horizontal-outline"></ion-icon>
        </div>
        <div className={cx("switch-text")}>Switch to</div>
        <img
          src={images.avt}
          alt="Avatar"
          className={cx("avatar-img", "avatar")}
        />
      </div>
      <div className={cx("option")}>
        {/* first item */}
        <ul className={cx("option-list")}>
          <Link to="" className={cx("option-item-link")}>
            <li className={cx("option-item")}>
              <div className={cx("option-icon")}>
                <ion-icon name="help-circle-outline"></ion-icon>
              </div>
              <div className={cx("option-name")}>Help & Support</div>
            </li>
          </Link>
        </ul>
        {/* second item */}
        <ul className={cx("option-list")}>
          <Link to="" className={cx("option-item-link")}>
            <li className={cx("option-item")}>
              <div className={cx("option-icon")}>
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <div className={cx("option-name")}>Setting</div>
            </li>
          </Link>
        </ul>
        {/* last item */}
        <ul className={cx("option-list")}>
          <Link to={config.routes.accounts} className={cx("option-item-link")}>
            <li className={cx("option-item")}>
              <div className={cx("option-icon")}>
                <ion-icon name="log-out-outline"></ion-icon>
              </div>
              <div className={cx("option-name")}>Logout</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
// UserOptions.propTypes = {
//   user: PropTypes.object.isRequired,
// };

export default UserOptions;
