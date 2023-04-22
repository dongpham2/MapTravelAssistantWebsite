import classNames from "classnames/bind";
import styles from "./SidebarLayout.module.scss";

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
  //   const role = useSelector(roleSelector);
  return <div className={cx("wrapper")}></div>;
}

export default SidebarLayout;
