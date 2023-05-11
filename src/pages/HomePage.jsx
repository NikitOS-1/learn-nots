import { getDatabase, ref, set } from "firebase/database";
import React, { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/sign-in");
        navigate("/sign-in");
      }
    });
  });
  return <div>Home</div>;
};
export default HomePage;
