import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import {
  fetchData,
  selectData,
  selectDataError,
  selectDataStatus,
} from "../../../redux/data";
import { useDispatch, useSelector } from "react-redux";
import Books from "./Books";

const ReadData = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const status = useSelector(selectDataStatus);
  const error = useSelector(selectDataError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const deleteBook = async (id) => {
    await deleteDoc(doc(db, "books", id));
    dispatch(fetchData());
  };

  return (
    <div>
      {error}
      {status}
      <h1>
        How many books you read{" "}
        <span style={{ color: "green" }}>{data.length}</span>
      </h1>
      {data.map((item) => (
        <Books key={item.id} item={item} deleteBook={deleteBook} />
      ))}
    </div>
  );
};
export default ReadData;
