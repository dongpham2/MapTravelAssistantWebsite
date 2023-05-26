import React, { useState } from "react";
import styles from "./Fanpage.module.scss";
import classNames from "classnames/bind";
import InputField from "src/pages/private/FanPage/Content/components/ProfileFanpage/FormEdit/InputField";
import DropDown from "src/component/Input/DropDown/DropDown";
import Input from "src/component/Input/Input";
import { Col, Modal, Row } from "react-bootstrap";
import TextEditor from "src/component/EditorText/EditorText";
import Button from "src/component/Button";
import { useDispatch, useSelector } from "react-redux";
import FormUploadBanner from "../../../FormUploadBanner/FormUploadBanner";
import FormUpload from "../../../FormUpload/FormUpload";
import { actionDeleteOwner } from "src/redux/actions/fanpage";

const pricesValue = [
  {
    value: "1",
    name: "VND",
  },
  {
    value: "2",
    name: "USA",
  },
  {
    value: "3",
    name: "EUR",
  },
  {
    value: "4",
    name: "Yen",
  },
  {
    value: "5",
    name: "Won",
  },
];

const typeStore = [
  {
    value: "6",
    name: "coffee",
  },
  {
    value: "7",
    name: "restaurant",
  },
  {
    value: "8",
    name: "coffee & restaurant",
  },
];
const cx = classNames.bind(styles);

export default function Fanage() {
  const auth = useSelector((state) => state.auth);
  const userID = auth?.user?.userID;
  // const fanpage = useSelector((state) => state.fanpage);
  const fanpage = auth.user.page;
  console.log(fanpage.description);
  const [file, setFile] = useState({
    preview: fanpage.img,
    data: "",
  });
  const [open, setOpen] = useState(fanpage.open);
  const [close, setClose] = useState(fanpage.close);
  const [content, setContent] = useState(fanpage.description);
  const [selectForm, setSelectForm] = useState({
    denomina: "",
  });
  const [showModalDelete, setShowModalDelete] = useState(false);
  const dispatch = useDispatch();
  const handleChangeSelect = (value, name, nameSelect) => {
    setSelectForm((prev) => {
      return { ...prev, [nameSelect]: name };
    });
  };
  const handleSetFile = (file) => {
    setFile(file);
  };
  const handleDelete = () => {
    dispatch(
      actionDeleteOwner({
        id: fanpage._id,
        data: {
          userID,
        },
        callBack(data) {
          setShowModalDelete(false);
        },
      })
    );
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-group")}>
        <div className={cx("input-block")}>
          <div className={cx("input-desc")}>(*) Upload your banner</div>
          <FormUploadBanner setFile={handleSetFile} file={file} />
        </div>
      </div>
      <div className={cx("form-group")}>
        <div className={cx("input-block")}>
          <div className={cx("input-desc")}>(*) Upload your fanpage avatar</div>
          <FormUpload />
        </div>
      </div>
      <div className={cx("form-group")}>
        <InputField isLabel type="text" label="Name" value={fanpage.name} />
        <InputField isLabel type="text" label="Phone " value={fanpage.phone} />
        <h3 className={cx("field-title")}> Description</h3>
        <div className={cx("text-desc")}>
          <TextEditor
            setContentBlog={setContent}
            // setContentBlog={fanpage.description}
            sHidderTools={true}
          />
        </div>
        {content !== "" ? (
          <div className={cx("btn")}>
            <Button cancel small>
              Cancel
            </Button>
            <Button primary small>
              Save
            </Button>
          </div>
        ) : (
          ""
        )}

        <InputField
          isLabel
          type="text"
          label="Website"
          value={fanpage.website}
        />
        <div className={cx("form-create")}>
          <div className={cx("services")}>
            <div className={cx("services-desc")}>Time Open</div>
            <div className={cx("services-time")}>
              <div className={cx("time")}>
                Open
                <input
                  type="time"
                  value={open}
                  className={cx("input-time")}
                  onChange={(e) => setOpen(e.target.value)}
                />
              </div>
              <span className={cx("time")}>-</span>
              <div className={cx("time")}>
                Close
                <input
                  type="time"
                  value={close}
                  className={cx("input-time")}
                  onChange={(e) => setClose(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={cx("services")}>
            <div className={cx("services-desc")}>Type</div>
            <div className={cx("type-option")}>
              <DropDown
                onChangeSelect={(value, name) =>
                  handleChangeSelect(value, name, "type")
                }
                title="Type"
                data={typeStore}
              />
            </div>
          </div>
        </div>
        {/* service */}
        <div className={cx("services")}>
          <div className={cx("services-desc")}>Services Price</div>
          <Row>
            <Col>
              <div className={cx("services-price")}>
                <div className={cx("services-input")}>
                  <Input
                    value={fanpage.priceStart}
                    className={cx("input-prices")}
                    primary
                    placeholder="Prices"
                  />
                </div>
                <span className={cx("price-dot")}>-</span>
                <div className={cx("services-input")}>
                  <Input
                    value={fanpage.priceEnd}
                    className={cx("input-prices")}
                    primary
                    placeholder="Prices"
                  />
                </div>
                <DropDown
                  onChangeSelect={(value, name) =>
                    handleChangeSelect(value, name, "denomina")
                  }
                  title="unit"
                  data={pricesValue}
                  className={cx("prices-option")}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx("btn-change")}>
        <Button deleted onClick={() => setShowModalDelete(true)}>
          Delete
        </Button>
        <Button primary>Save</Button>
      </div>
      <Modal
        className={cx("modal")}
        show={showModalDelete}
        onHide={() => {
          setShowModalDelete(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Continue to deleted?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            rounded
            small
            cancel
            onClick={() => {
              setShowModalDelete(false);
            }}
          >
            Cancel
          </Button>
          <Button
            primary
            small
            rounded
            onClick={() => {
              handleDelete();
              // setShowModalDelete(false);
            }}
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
