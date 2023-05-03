import { getDatabase, ref, set } from "firebase/database";
import React, { Suspense } from "react";

const HomePage = () => {
  const database = getDatabase();
  function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
    });
  }
  writeUserData(
    "cApY8wianOh1pzOYnyBq50BJoO22",
    "nikita",
    "nik@LogoDevSharp.fd"
  );
  console.log(database);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
};
export default HomePage;
