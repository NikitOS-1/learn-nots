import { getDatabase } from "firebase/database";
import React, { Suspense } from "react";

const HomePage = () => {
  const database = getDatabase();
  console.log(database);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
};
export default HomePage;
