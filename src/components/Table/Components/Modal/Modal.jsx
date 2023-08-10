import "./Modal.css";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        {children}
        <button className="close-button" onClick={closeModal.closeModal}>
          close
        </button>
      </div>
    </div>
  );
};
export default Modal;
