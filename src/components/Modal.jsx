import React from "react";
import "./Modal.css";

// pass through children as props
const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => onClose()} >&times;</p>
        </div>
        <div className="modal-content">
          {/* <h1>Good Morning!</h1> */}
          {children}
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
