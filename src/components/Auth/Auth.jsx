import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { getAuth } from "firebase/auth";
import FormPayment from "../FormPayment/FormPayment";

const Auth = () => {
  const auth = getAuth();

  return (
    <div>
      {!auth.currentUser && (
        <div style={{ margin: "20px" }}>
          <Link to="/sign-in" style={{ margin: "5px" }}>
            Sign In
          </Link>
          <Link to="/sign-up" style={{ margin: "5px" }}>
            Sign Up
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<FormPayment />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default Auth;
