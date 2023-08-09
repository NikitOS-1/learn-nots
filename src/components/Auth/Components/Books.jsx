import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/modalReducer";

const Books = (item) => {
  const dispatch = useDispatch();
  const { id, book, author, timeRead, dificult, about, deleteBook } = item;
  console.log(item);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}>
      <div>Book: {item.book}</div>
      {/* <div>Author: {author}</div>
      <div>Time read: {timeRead}</div>
      <div>Dificult: {dificult}</div>
      <div>About: {about}</div>
      <button style={{ width: "100px" }} onClick={() => dispatch(openModal())}>
        See more
      </button>
      <button onClick={() => deleteBook(id)}>delete</button> */}
    </div>
  );
};

export default Books;
