import { useNavigate } from "react-router-dom";
import FormSignIn from "../components/Form/FormSignIn";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  });
  return <FormSignIn />;
};
export default SignIn;
