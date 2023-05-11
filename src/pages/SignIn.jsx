import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submit = () => {};
  return (
    <form typeof="submit">
      <h1>SignIn</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e.target.value))}
      />{" "}
      <br />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass((prev) => (prev = e.target.value))}
      />{" "}
      <br />
      <button onClick={submit}>SignIn</button>
      <button onClick={submit}>SignIn</button>
    </form>
  );
};
export default SignIn;
