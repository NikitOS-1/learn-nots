import { getDatabase, ref, set } from "firebase/database";
import React, { Suspense, useEffect } from "react";

const HomePage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
};
export default HomePage;
