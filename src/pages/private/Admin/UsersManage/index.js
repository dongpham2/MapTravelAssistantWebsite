import React from "react";
import classNames from "classnames/bind";
import styles from "./UsersManage.module.scss";

const cx = clas;
export default function UsersManage() {
  return (
    <>
      {isLoading && <Loading />}
      <Modal
        className={cx("modal")}
        show={showModalDelete}
        onHide={() => {
          setShowModalDelete(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tiếp tục xóa?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            rounded
            secondary
            onClick={() => {
              setShowModalDelete(false);
            }}
          >
            Hủy
          </Button>
          <Button
            primary
            rounded
            onClick={() => {
              handleDeleteUser(idUserDelete);
              setShowModalDelete(false);
            }}
          >
            Xóa
          </Button>
        </Modal.Body>
      </Modal>
      <div className={cx("wrapper")}>
        <AddAccountModal show={showModal} onClose={handleClose} />
        <div className={cx("header")}>
          <h2 className={cx("heading")}>Quản lý người dùng</h2>
          <div className={cx("header-options")}>
            <Button
              onClick={handleShow}
              leftIcon={<ion-icon name="add-sharp"></ion-icon>}
              primary
              rounded
            >
              Cấp tài khoản
            </Button>
          </div>
        </div>

        <div className={cx("content")}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userList.length &&
                userList.map((user, index) => {
                  return (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td className={cx("action-column")}>
                        <span
                          onClick={() => {
                            setIdUserDelete(user.id);
                            setShowModalDelete(true);
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
    </>
  );
}
