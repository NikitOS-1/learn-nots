import { useNavigate } from "react-router-dom";
import FormSignUp from "../components/Form/FormSignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  });
  return <FormSignUp />;
};
export default SignUp;
