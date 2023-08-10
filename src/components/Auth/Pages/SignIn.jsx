import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthGoogle from "../Components/AuthGoogle";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState("password");
  const [error, setError] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const showPassword = () => {
    setShowPass((prev) => (prev === "password" ? "text" : "password"));
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError((prev) => (prev = errorMessage));
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  });

  return (
    <div>
      <h1>Sign In</h1>
      <div style={{ margin: "5px" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail((prev) => e.target.value)}
          placeholder="Email"
        />
      </div>
      <div style={{ margin: "5px" }}>
        <input
          type={showPass}
          value={pass}
          onChange={(e) => setPass((prev) => e.target.value)}
          placeholder="Password"
        />
        <button onClick={showPassword}>Show Password</button>
      </div>
      <div style={{ color: "red" }}>{error}</div>
      <button style={{ margin: "5px", width: "265px" }} onClick={signIn}>
        Sign In
      </button>

      <AuthGoogle />
    </div>
  );
};
export default SignIn;
