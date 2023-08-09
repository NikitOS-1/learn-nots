// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { isModalOpen, openModal } from "../../redux/modalReducer";

const UsedModal = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  const dispatch = useDispatch();
  const modalOpen = useSelector(isModalOpen);

  return (
    <div>
      <div
        onClick={() => dispatch(openModal())}
        style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
        Click me and doing Magic
      </div>
      {modalOpen && (
        <Modal>
          <h2>This is Modal Window</h2>
          <p>It great</p>
        </Modal>
      )}
    </div>
  );
};
export default UsedModal;
