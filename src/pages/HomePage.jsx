import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, id, tokken } = useSelector((state) => state.user);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });

  let isLogin = localStorage.getItem("isLogin");

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
    </div>
  );
};
export default HomePage;
