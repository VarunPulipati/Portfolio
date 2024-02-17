import React from "react";
import styles from "./Modal.module.css"; // You will need to create this CSS module

const Modal = ({ title, onClose, children }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={onClose} className={styles.closeBtn}>
          &times;
        </button>
        <h2>{title}</h2>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
