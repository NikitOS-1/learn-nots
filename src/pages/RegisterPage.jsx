import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../redux/userSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegist = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          addUser({
            email: user.email,
            id: user.uid,
            tokken: user.refreshToken,
          })
        );
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="Register" handleClick={handleRegist} />
      <Link to={"/"}>If you have account Login</Link>
    </div>
  );
};
export default RegisterPage;
