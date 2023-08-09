import "./Modal.css";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          close
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
