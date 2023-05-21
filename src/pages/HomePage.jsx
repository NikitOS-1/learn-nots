import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import { app } from "../firebase";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const db = getFirestore(app);
  function add() {
    setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      country: "USA",
    });
  }

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
        // An error happened.
      });
  };

  return (
    <div>
      Home
      <input
        type="text"
        value={name}
        onChange={(e) => setName((prev) => (prev = e.target.value))}
        placeholder="name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e.target.value))}
        placeholder="email"
      />
      <button onClick={add}>add</button>
      <br />
      <button onClick={submit}>Exit</button>
    </div>
  );
};
export default HomePage;
