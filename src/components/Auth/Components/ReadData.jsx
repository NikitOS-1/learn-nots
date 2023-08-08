import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import { fetchData, selectData, selectError } from "../../../redux/data";
import { useDispatch, useSelector } from "react-redux";

const ReadData = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const dataRedux = useSelector((data) => data.data.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(dataRedux);

  // const fetchData = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "books"));
  //     setData(
  //       (prev) =>
  //         (prev = querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         })))
  //     );
  //   } catch (error) {
  //     console.error("Error fetching data : ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>
        How many books you read{" "}
        <span style={{ color: "green" }}>{++data.length - 1}</span>
      </h1>
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px",
          }}
          key={item.id}>
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
