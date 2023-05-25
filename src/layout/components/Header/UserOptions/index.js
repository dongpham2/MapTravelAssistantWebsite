import React from "react";
import classNames from "classnames/bind";
import styles from "./UserOptions.module.scss";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../../config";
import images from "../../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "src/redux/actions/authen";

const cx = classNames.bind(styles);
function UserOptions() {
  const { auth } = useSelector((state) => state);
  const isPage = localStorage.getItem("isFanpage");
  const id = auth.user?.page?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePage = () => {
    isPage === "false"
      ? navigate("/setting/createFanpage")
      : navigate(`/fanpage/${id}`);
  };
  const handleLogout = () => {
    dispatch(LogoutAction());
    navigate("/accounts");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-left")}>
          {auth?.user?.avatar ? (
            <img
              src={auth?.user?.avatar}
              alt="Avatar"
              className={cx("avatar-img", "avatar")}
            />
          ) : (
            <img
              src={images.avt_default}
              className={cx("avatar-img", "avatar")}
              alt=""
            />
          )}
        </div>
        <div className={cx("header-right")}>
          <div className={cx("user-name")}>{auth.user.fullName}</div>
        </div>
      </div>

      <div className={cx("option")}>
        {/* first item */}
        <ul className={cx("option-list")}>
          <div className={cx("option-item-link")} onClick={() => handlePage()}>
            <li className={cx("option-item")}>
              <div className={cx("option-icon")}>
                <ion-icon name="logo-mastodon"></ion-icon>
              </div>
              <div className={cx("option-name")}>Fanpage</div>
            </li>
          </div>
        </ul>

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
          <Link to={config.routes.profile} className={cx("option-item-link")}>
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
              <div className={cx("option-name")} onClick={handleLogout}>
                Logout
              </div>
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
