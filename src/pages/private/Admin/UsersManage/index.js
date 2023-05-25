import classNames from "classnames/bind";
import styles from "./UsersManage.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, Table } from "react-bootstrap";

import Button from "src/component/Button";
import AddAccountModal from "./AddAccountModal/AddAccountModal";
import Input from "src/component/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteUsers, actionGetAllUsers } from "src/redux/actions/admin";
import Loading from "src/component/Loading/Loading";

const cx = classNames.bind(styles);

function UsersManage() {
  // const listUsers = useSelector((state) => state.listUsers);
  const [listUsers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isId, setIsId] = useState(null);
  const [idUserDelete, setIdUserDelete] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleDeleteUser = () => {};
  useEffect(() => {
    setLoading(true);
    dispatch(
      actionGetAllUsers({
        callback(data) {
          if (data) {
            setListUsers(data);
          }
          setLoading(false);
        },
      })
    );
  }, []);

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
          <AddAccountModal show={showModal} onClose={handleClose} />
          <div className={cx("header")}>
            <h2 className={cx("heading")}>Manage User</h2>
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
                  <th>User ID</th>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Fanpage</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listUsers.length &&
                  listUsers.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user._id}</td>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>
                          {/* <ion-icon name="checkmark-outline"></ion-icon> */}
                          {user.isPage ? (
                            <ion-icon
                              name="checkmark-outline"
                              style={{ color: "green" }}
                            ></ion-icon>
                          ) : (
                            <span style={{ color: "red", marginLeft: "4px" }}>
                              x
                            </span>
                          )}
                        </td>
                        <td className={cx("action-column")}>
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
                        </td>
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
    </>
  );
}

export default UsersManage;
