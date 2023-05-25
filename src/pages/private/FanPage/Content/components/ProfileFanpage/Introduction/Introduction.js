import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";
import Button from "src/component/Button";
import Input from "src/component/Input/Input";
import TextEditor from "src/component/EditorText/EditorText";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";

const cx = classNames.bind(styles);
export default function Bio() {
  const auth = useSelector((state) => state.auth);
  const parameters = useParams();
  const isCreator = auth.user.page?._id === parameters.id ? true : false;
  const [isBio, setIsBio] = useState(false);
  const [content, setContent] = useState("");

  const handleBioChange = () => {
    setIsBio(!isBio);
  };
  useEffect(() => {
    const getFanpage = async () => {
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${parameters.id}`);
      // console.log("res", res.data);
    };
    getFanpage();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3 className={cx("introduce")}>Introduce</h3>
        {!isCreator ? (
          <span className={cx("intro")}>
            Out restaurant provide a delicous food to every one
          </span>
        ) : !isBio ? (
          <Button bio onClick={handleBioChange}>
            Add Bio
          </Button>
        ) : (
          <div className={cx("bio-infor")}>
            <div className={cx("edit-text")}>
              <TextEditor setContentBlog={setContent} sHidderTools={true} />
            </div>
            <div className={cx("btn")}>
              <Button small cancel onClick={handleBioChange}>
                Cancel
              </Button>
              <Button small saveInput>
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
