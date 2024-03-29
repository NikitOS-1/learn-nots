import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from "../../../firebase";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../redux/data";

const AddData = () => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [timeRead, setTimeRead] = useState("");
  const [dificult, setDificult] = useState("");
  const [about, setAbout] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addBookInCollection = async () => {
    try {
      const docRef = await addDoc(collection(db, "books"), {
        book,
        author,
        timeRead,
        dificult,
        about,
      });
      dispatch(fetchData());
    } catch (e) {
      setError(e);
    }
    setBook("");
    setAuthor("");
    setTimeRead("");
    setDificult("");
    setAbout("");
    setError("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      {error}
      <input
        type="text"
        placeholder="book"
        value={book}
        onChange={(e) => setBook((prev) => (prev = e.target.value))}
      />
      <input
        type="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor((prev) => (prev = e.target.value))}
      />
      <input
        type="text"
        placeholder="timeRead"
        value={timeRead}
        onChange={(e) => setTimeRead((prev) => (prev = e.target.value))}
      />
      <input
        type="text"
        placeholder="dificult"
        value={dificult}
        onChange={(e) => setDificult((prev) => (prev = e.target.value))}
      />
      <textarea
        type="text"
        placeholder="about"
        value={about}
        onChange={(e) => setAbout((prev) => (prev = e.target.value))}
        style={{ height: "70px" }}
      />
      <button onClick={addBookInCollection}>Add book in my collection</button>
    </div>
  );
};
export default AddData;
