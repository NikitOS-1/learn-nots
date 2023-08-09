import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
