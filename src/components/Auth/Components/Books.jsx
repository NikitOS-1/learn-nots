import { useDispatch, useSelector } from "react-redux";
import {
  getSelectItem,
  isModalOpen,
  openModal,
  selectID,
} from "../../../redux/modalReducer";
import Modal from "../../Modal/Modal";

const Books = ({ id, book, author, timeRead, dificult, about, deleteBook }) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(isModalOpen);
  const selectId = useSelector(selectID);
  console.log(selectId);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}>
      <div>Book: {book}</div>
      <div>Author: {author}</div>
      <div>Time read: {timeRead}</div>
      <div>Dificult: {dificult}</div>
      <div>About: {about}</div>
      <button
        style={{ width: "100px" }}
        onClick={() => dispatch(getSelectItem(id))}>
        See more
      </button>
      <button onClick={() => deleteBook(id)}>delete</button>
      {modalOpen && <Modal></Modal>}
    </div>
  );
};

export default Books;
