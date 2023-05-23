import React from "react";
import { Modal } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./AddAccountModal.module.scss";

const cx = classNames.bind(styles);
export default function AddAccountModal({ show, onClose }) {
  return (
    <>
      <div className={cx("wrapper")}>
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Signin for user</Modal.Title>
          </Modal.Header>
          <Modal.Body>{/* <RegisterForm adminAddAccountForm /> */}</Modal.Body>
        </Modal>
      </div>
    </>
  );
}
