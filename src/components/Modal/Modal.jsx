import { useDispatch } from "react-redux";
import "./Modal.css";
import { closeModal } from "../../redux/modalReducer";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-button" onClick={() => dispatch(closeModal())}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
