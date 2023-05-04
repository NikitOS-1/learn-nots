import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form typeof="submit">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e.target.value))}
      />
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass((prev) => (prev = e.target.value))}
      />
      <button>SignIn</button>
    </form>
  );
};
export default SignIn;
