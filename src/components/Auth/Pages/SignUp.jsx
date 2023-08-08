import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState("password");
  const auth = getAuth();

  const showPassword = () => {
    setShowPass((prev) => (prev === "password" ? "text" : "password"));
  };

  const createAccount = () => {
    if (pass1 === pass2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
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
            value={pass1}
            onChange={(e) => setPass1((prev) => e.target.value)}
            placeholder="Password"
          />
        </div>
        <div style={{ margin: "5px" }}>
          <input
            type={showPass}
            value={pass2}
            onChange={(e) => setPass2((prev) => e.target.value)}
            placeholder="Password"
          />
          <button onClick={showPassword}>Show Password</button>
        </div>
      </div>
      <button style={{ margin: "5px", width: "265px" }} onClick={createAccount}>
        Create account
      </button>
    </div>
  );
};
export default SignUp;
