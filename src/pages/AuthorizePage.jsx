import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const AuthorizePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, pass) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          addUser({
            email: user.email,
            id: user.uid,
            tokken: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="Login" handleClick={handleLogin} />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
};
export default AuthorizePage;
