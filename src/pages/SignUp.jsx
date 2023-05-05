const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const submit = () => {};
  return (
    <form typeof="submit">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e.target.value))}
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass((prev) => (prev = e.target.value))}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName((prev) => (prev = e.target.value))}
      />
      <button onClick={submit}>SignIn</button>
    </form>
  );
};
export default SignUp;
