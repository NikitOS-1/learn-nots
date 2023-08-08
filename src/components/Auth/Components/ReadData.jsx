import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

const ReadData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "books"));
      setData(
        (prev) =>
          (prev = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
          })))
      );
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>How many books you read</h1>
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px",
          }}
          key={item.book}>
          <div>Book: {item.book}</div>
          <div>Author: {item.autor}</div>
          <div>Time read: {item.timeRead}</div>
          <div>Dificult: {item.dificult}</div>
          <div>About: {item.about}</div>
        </div>
      ))}
    </div>
  );
};
export default ReadData;
