import { getDatabase, ref, set } from "firebase/database";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomePage = () => {
  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  const navigate = useNavigate();
  const auth = getAuth();

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("icon.jpg");
  return (
    <div>
      Home
      <input
        type="text"
        value={name}
        onChange={(e) => setName((prev) => (prev = e))}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail((prev) => (prev = e))}
      />
      <button onClick={submit}>Exit</button>
    </div>
  );
};
export default HomePage;
