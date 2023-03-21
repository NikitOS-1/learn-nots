import { useState } from "react";
import { useSelector } from "react-redux";

const Form = () => {
  const [userName, setUserName] = useState(
    useSelector((state) => state.user.email)
  );
  const [userEmail, setUserEmail] = useState("");

  console.log(userName);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="your email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Form;
