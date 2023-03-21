import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="email"
        placeholder="Your Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Your Password"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Login</button>
      <br />
    </div>
  );
};
export default Form;
