import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import {
  fetchData,
  selectData,
  selectDataError,
  selectDataStatus,
} from "../../../redux/data";
import { useDispatch, useSelector } from "react-redux";

const ReadData = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const status = useSelector(selectDataStatus);
  const error = useSelector(selectDataError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {error}
      {status}
      <h1>
        How many books you read{" "}
        <span style={{ color: "green" }}>{data.length - 1}</span>
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
