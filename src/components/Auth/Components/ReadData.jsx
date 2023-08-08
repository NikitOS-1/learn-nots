import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

const ReadData = () => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [timeRead, setTimeRead] = useState("");
  const [dificult, setDificult] = useState("");
  const [about, setAbout] = useState("");

  const addBookInPage = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };
  useEffect(() => {
    addBookInPage();
  }, []);

  return (
    <div>
      <h1>How many books you read</h1>
    </div>
  );
};
export default ReadData;
