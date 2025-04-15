import React from "react";

const ModalContent = ({ id, header, footer, body }) => {
  return (
    <div id={id || "Modal"}>
      <div className="header">
        <span>❌</span>
        <h1>{header ? header : "Header"}</h1>
      </div>
      <div className="body">
        {body ? body : <div>This is Our Modal Body</div>}
      </div>
      <div className="footer">
        <h1>{footer ? footer : "Footer"}</h1>
      </div>
    </div>
  );
};

export default ModalContent;
