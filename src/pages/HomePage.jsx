import React, { Suspense, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AddFile from "../components/AddFile/AddFile";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/sign-in");
      }
    });
  });

  const exit = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <div>
        <Link to={"/sign-in"} style={{ margin: "10px" }}>
          Sign In
        </Link>
        <Link to={"/sign-up"} style={{ margin: "10px" }}>
          Sign Up
        </Link>
      </div>
      Home Private Page
      <AddFile />
      <br />
      {error}
      <br />
      <button onClick={exit}>Exit</button>
    </div>
  );
};
export default HomePage;
