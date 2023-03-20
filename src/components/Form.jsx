import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  return (
    <div>
      <form action="">
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Form;
