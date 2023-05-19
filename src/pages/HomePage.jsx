import { getDatabase, ref, set } from "firebase/database";
import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const userId = auth.currentUser.uid;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("icon.jpg");

  function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  return onValue(
    ref(db, "/users/" + userId),
    (snapshot) => {
      const username =
        (snapshot.val() && snapshot.val().username) || "Anonymous";
      // ...
    },
    {
      onlyOnce: true,
    }
  );

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
      <button onClick={writeUserData(userId, name, email, imageUrl)}>
        add
      </button>
      <br />
      <button onClick={submit}>Exit</button>
    </div>
  );
};
export default HomePage;
