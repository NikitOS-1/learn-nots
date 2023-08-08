import { Route, Routes, Link, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { RequireAuth } from "../../hooks/PrivatePages/RequireAuth";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Auth = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <Link to="/sign-in" style={{ margin: "5px" }}>
          Sign In
        </Link>
        <Link to="/sign-up" style={{ margin: "5px" }}>
          Sign Up
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default Auth;
