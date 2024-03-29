import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../firebase";
import { get } from "firebase/database";

const AddFile = () => {
  const [data, setData] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const db = getFirestore(app);
  // const docData = ;
  // const today = doc(db, "today/now");

  const add = async () => {
    try {
      const docRef = await addDoc(collection(db, "product"), {
        title,
        price,
        desc,
        imageUrl,
      });
      // console.log("Document written with ID: ", docRef.id);
      // console.log(docRef);
    } catch (error) {
      // console.error(error);
    }
  };

  const getData = async () => {
    const datas = get(collection(db, "product"));
    console.log(datas);
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      setData([doc.data()]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle((prev) => (prev = e.target.value))}
          placeholder="Title"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice((prev) => (prev = e.target.value))}
          placeholder="Price"
        />
        <br />
        <textarea
          name="Description"
          placeholder="Description"
          cols="34"
          rows="10"
          value={desc}
          onChange={(e) =>
            setDesc((prev) => (prev = e.target.value))
          }></textarea>
        <br />
        <input
          type="file"
          value={imageUrl}
          onChange={(e) => setImageUrl((prev) => (prev = e.target.value))}
          placeholder="IMG"
        />
        <br />
        <br />
        <button style={{ width: "294px", height: "50px" }} onClick={add}>
          Add
        </button>
      </div>
      <br />
      <div>
        {data.map((e) => (
          <div key={e}>
            <h1>------------------</h1>
            <p>{e.title}</p>
            <p>{e.desc}</p>
            <p>{e.price}</p>
            <p>{e.imageUrl}</p>
            <h1>------------------</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AddFile;
