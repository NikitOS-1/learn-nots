import { useState } from "react";

const AddFile = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const add = () => {};
  return (
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
        cols="30"
        rows="10"
        value={desc}
        onChange={(e) => setDesc((prev) => (prev = e.target.value))}></textarea>
      <br />
      <input
        type="file"
        value={imageUrl}
        onChange={(e) => setImageUrl((prev) => (prev = e.target.value))}
        placeholder="IMG"
      />
      <br />
      <button onClick={add}>Add</button>
    </div>
  );
};
export default AddFile;
