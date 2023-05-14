import classNames from "classnames/bind";

import styles from "./SidebarLayout.module.scss";
import Sidebar from "../components/SideBar";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <HeaderAdmin />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default SidebarLayout;
