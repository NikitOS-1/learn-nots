import { Link } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthorizePage = () => {
  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((state) => {
        console.log(state);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form title="Login" handleClick={handleLogin} />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
};
export default AuthorizePage;
