import React from "react";

const ModalContent = ({ id, header, footer, body }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-header">
        <span className="modal-close">❌</span>
        <h1 className="modal-title">{header ? header : "Header"}</h1>
      </div>
      <div className="modal-body">
        {body ? body : <div>This is Our Modal Body</div>}
      </div>
      <div className="modal-footer">
        <h1 className="modal-footer-text">{footer ? footer : "Footer"}</h1>
      </div>
    </div>
  );
};

export default ModalContent;
