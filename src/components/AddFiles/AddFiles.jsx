const AddFiles = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const db = getFirestore(app);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName((prev) => (prev = e.target.value))}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e.target.value))}
        placeholder="email"
      />
      <br />
      <button onClick={add}>add</button>
    </div>
  );
};
export default AddFiles;
