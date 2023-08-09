import { useState } from "react";
import Modal from "./Modal";

const UsedModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={openModal}
        style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
        Click me and doing Magic
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>This is Modal Window</h2>
          <p>It great</p>
        </Modal>
      )}
    </div>
  );
};
export default UsedModal;
