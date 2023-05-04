import { getDatabase, ref, set } from "firebase/database";
import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
};
export default HomePage;
