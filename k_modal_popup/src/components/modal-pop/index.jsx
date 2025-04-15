import React, { useState } from "react";
import ModalContent from "../model-content";

const ModalPopUp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      Model Open Here
      <button onClick={handleToggleModal}>Click to Open Modal</button>
      {modalOpen && <ModalContent />}
    </div>
  );
};

export default ModalPopUp;
