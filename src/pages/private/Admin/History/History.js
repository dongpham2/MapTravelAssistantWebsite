import classNames from "classnames/bind";
import styles from "./History.module.scss";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { Modal, Table } from "react-bootstrap";

import Button from "src/component/Button";
// import AddAccountModal from "./AddAccountModal/AddAccountModal";
import Input from "src/component/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteUsers, actionGetAllUsers } from "src/redux/actions/admin";
import {
  actionEditFangpage,
  actionGetAllFangpage,
  actionGetDetailFangpage,
} from "src/redux/actions/fanpage";
import CInput from "src/component/CInput/CInput";
import ICON_EDIT from "src/assets/images/icon-edit.png";
import {
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormSwitch,
  CLink,
} from "@coreui/react";
import { Link } from "react-router-dom";
import Loading from "src/component/Loading/Loading";
const cx = classNames.bind(styles);

function History() {
  const fanpages = useSelector((state) => state.fanpage);
  // const [listPages, setListPages] = useState([]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isId, setIsId] = useState(null);
  const [idUserDelete, setIdUserDelete] = useState(null);
  const [visible, setVisible] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [state, setState] = useState({
    isPublic: false,
    lat: "",
    lon: "",
    name: "",
    id: "",
  });
  const { isPublic, name, id, lat, lon } = state;
  const handleDeleteUser = () => {
    dispatch(actionDeleteUsers(isId));
  };
  useEffect(() => {
    setLoading(true);
    dispatch(
      actionGetAllFangpage({
        // callBack(data) {
        //   if (data.message === "GET SUCCESSFUL") {
        //     setListPages(data.data);
        //   }
        // },
      })
    );
    setLoading(false);
  }, []);
  const handleEdit = () => {
    console.log(isPublic);
    dispatch(
      actionEditFangpage({
        id,
        data: {
          isPublic,
          lat,
          lon,
        },
      })
    );
    setVisible(false);
    // window.location.reload();
  };
  const handleOnChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <>
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
              handleDeleteUser();
              setShowModalDelete(false);
            }}
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
      {!loading ? (
        <div className={cx("wrapper")}>
          {/* <AddAccountModal show={showModal} onClose={handleClose} /> */}
          <div className={cx("header")}>
            <h2 className={cx("heading")}>Manage Page</h2>
            <div className={cx("search")}>
              <Input
                rightIcon={<ion-icon name="search-outline"></ion-icon>}
                primary
                placeholder="Search user..."
              />
            </div>
          </div>

          <div className={cx("content")}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Page ID</th>
                  <th>Name</th>
                  <th>Website</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Lat</th>
                  <th>Lon</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {fanpages.length &&
                  fanpages.map((page, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{page._id}</td>
                        <td>{page.name}</td>
                        <td>{page.website ? page.website : "-"}</td>
                        <td>{page.phone}</td>
                        <td>{page.address}</td>
                        <td>
                          <CInput
                            readOnly={true}
                            value={page.location.lat ? page.location.lat : "-"}
                          />
                        </td>
                        <td>
                          <CInput
                            readOnly={true}
                            value={page.location.lon ? page.location.lon : "-"}
                          />
                        </td>
                        {page.isPublic ? (
                          <td style={{ color: "green" }}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                          </td>
                        ) : (
                          <td style={{ color: "red" }}>x</td>
                        )}

                        <td>
                          <span
                            style={{ color: "#FF8C00" }}
                            onClick={(event) => {
                              event.preventDefault();
                              // handleEdit(page._id);
                              setVisible(true);
                              setState((preState) => ({
                                name: page.name,
                                id: page._id,
                                lat: page.location.lat
                                  ? page.location.lat
                                  : "-",
                                lon: page.location.lon
                                  ? page.location.lon
                                  : "-",
                                isPublic: page.isPublic,
                              }));
                            }}
                          >
                            <ion-icon name="create-outline"></ion-icon>
                          </span>
                          <span
                            style={{ color: "black" }}
                            onClick={(event) => {
                              event.preventDefault();
                              // handleEdit(page._id);
                              setShowModalDelete(true);
                            }}
                          >
                            <ion-icon name="trash-outline"></ion-icon>
                          </span>
                          {/* <img
                          style={{ cursor: "pointer" }}
                          src={ICON_EDIT}
                          alt=""
                          onClick={(event) => {
                            event.preventDefault();
                            // handleEdit(page._id);
                            setVisible(true);
                            setState((preState) => ({
                              name: page.name,
                              id: page._id,
                              lat: page.location.lat ? page.location.lat : "-",
                              lon: page.location.lon ? page.location.lon : "-",
                              isPublic: page.isPublic,
                            }));
                          }}
                        /> */}
                        </td>

                        {/* <td className={cx("action-column")}>
                        <span
                          onClick={() => {
                            // setIdUserDelete(user.id);
                            setShowModalDelete(true);
                            setIsId(user?._id);
                          }}
                          className={cx("content-icon")}
                        >
                          <ion-icon name="trash-sharp"></ion-icon>
                        </span>
                      </td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      {/* Modal Fix fanpage */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle
            style={{
              fontSize: "25px",
              marginLeft: "180px",
            }}
          >
            Edit Page
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className={cx("form mb-3")}>
            <label className={cx("form--label")}>ID page</label>
            <CInput disabled={true} className={cx("form--input")} value={id} />
          </CRow>
          <CRow className={cx("form mb-3")}>
            <label className={cx("form--label")}>Name page</label>
            <CInput
              disabled={true}
              className={cx("form--input")}
              value={name}
            />
          </CRow>
          <CRow className={cx("form mb-3")}>
            <CFormSwitch
              label="Public"
              value={isPublic}
              onChange={(event) =>
                handleOnChange("isPublic", event.target.checked)
              }
            />
          </CRow>
          <CRow className={cx("form mb-3")}>
            <label className={cx("form--label")}>Latitude</label>
            <CInput
              className={cx("form--input")}
              value={lat}
              onChange={(value) => handleOnChange("lat", value)}
            />
          </CRow>
          <CRow className={cx("form mb-3")}>
            <label className={cx("form--label")}>Longitude</label>
            <CInput
              className={cx("form--input")}
              value={lon}
              onChange={(value) => handleOnChange("lon", value)}
            />
          </CRow>
          {/* <CLink /> */}
        </CModalBody>
        <CModalFooter>
          <Button cancel small onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button primary small onClick={() => handleEdit()}>
            Save changes
          </Button>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default History;
