import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegist = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        navigate("/login");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="Register" handleClick={handleRegist} send={"Register"} />
      <Link to={"/login"}>If you have account Login</Link>
    </div>
  );
};
export default RegisterPage;
