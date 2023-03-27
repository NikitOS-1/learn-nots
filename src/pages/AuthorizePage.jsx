import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addData } from "../redux/userDataSlice";

const AuthorizePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uData = useSelector((state) => state.userData.data);
  console.log(uData);

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => dispatch(addData({ data })));

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
