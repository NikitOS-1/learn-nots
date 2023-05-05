import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const submit = () => {};
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  });
  return (
    <form typeof="submit">
      <h1>SignUp</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e.target.value))}
      />
      <br />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass((prev) => (prev = e.target.value))}
      />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName((prev) => (prev = e.target.value))}
      />
      <br />
      <button onClick={submit}>SignIn</button>
    </form>
  );
};
export default SignUp;
