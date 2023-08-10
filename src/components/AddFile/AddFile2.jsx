import { useState } from "react";

const AddFile2 = () => {
  const [file, setFile] = useState(null);
  const updateFile = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file);
  return (
    <div>
      <input type="file" onChange={updateFile} />
    </div>
  );
};
export default AddFile2;
