import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AuthorizePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => dispatch());

  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="Login" handleClick={handleLogin} send={"Login"} />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
};
export default AuthorizePage;
