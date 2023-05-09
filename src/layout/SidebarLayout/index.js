import classNames from "classnames/bind";

import styles from "./SidebarLayout.module.scss";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default SidebarLayout;
