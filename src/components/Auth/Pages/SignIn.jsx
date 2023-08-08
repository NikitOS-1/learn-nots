import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState("password");
  const showPassword = () => {
    setShowPass((prev) => (prev === "password" ? "text" : "password"));
  };
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });

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
      <button style={{ margin: "5px", width: "265px" }}>Sign In</button>
    </div>
  );
};
export default SignIn;
