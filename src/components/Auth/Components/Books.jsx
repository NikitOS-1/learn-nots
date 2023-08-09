import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/modalReducer";

const Books = (data) => {
  const dispatch = useDispatch();
  const { id, book, author, timeRead, dificult, about } = data.data;

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
      <button style={{ width: "100px" }} onClick={() => dispatch(openModal)}>
        See more
      </button>
      <button onClick={() => data.deleteBook(id)}>delete</button>
    </div>
  );
};

export default Books;
