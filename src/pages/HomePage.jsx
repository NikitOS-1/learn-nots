import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AddFiles from "../components/addFiles/addFiles";

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

  const submit = () => {
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
      Home Private Page
      <AddFiles />
      <br />
      {error}
      <br />
      <button onClick={submit}>Exit</button>
    </div>
  );
};
export default HomePage;
