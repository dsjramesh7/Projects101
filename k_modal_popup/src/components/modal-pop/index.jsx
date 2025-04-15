import React, { useState } from "react";
import ModalContent from "../model-content";

const ModalPopUp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      Model Open Here
      <button onClick={handleToggleModal}>Click to Open Modal</button>
      {modalOpen && (
        <ModalContent
          body={<div>hehe hehe hishashiburi dana</div>}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default ModalPopUp;
