import { useNavigate } from "react-router-dom";
import FormSignIn from "../components/Form/FormSignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        return <FormSignIn />;
      }
    });
  });
};
export default SignIn;
