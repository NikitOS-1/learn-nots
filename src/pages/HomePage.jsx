import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, id, tokken } = useSelector((state) => state.user);
  let isLogin = localStorage.getItem("isLogin");

  const auth = getAuth();

  useEffect(() => {
    isLogin ? navigate("/") : navigate("/login");
  }, [isLogin]);

  return (
    <div>
      <p> Welcome !!! </p>
      <p> Home page</p>

      <button onClick={() => dispatch(removeUser())}>
        Log Out with {email}
      </button>
      <Link to={"/comp1"}>to comp1</Link>
      <Link to={"/comp2"}>to comp2</Link>
    </div>
  );
};
export default HomePage;
