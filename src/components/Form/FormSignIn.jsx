import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FormSignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  // const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage + " " + errorCode);
      });
  };
  return (
      <form typeof="submit">
          <h1>SignIn</h1>
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail((prev) => (prev = e.target.value))}
          />{" "}
          <br/>
          <input
              type="password"
              value={pass}
              onChange={(e) => setPass((prev) => (prev = e.target.value))}
          />{" "}
          <br/>
          {error}
          <br/>
          <button onClick={submit}>SignIn</button>
      </form>
  );
};
export default FormSignIn;
