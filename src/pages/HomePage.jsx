import React, { Suspense } from "react";
// import Algorithms from "../algorithms/Algorithms";

const Algorithms = React.lazy(() => import("../algorithms/Algorithms"));

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
};
export default HomePage;
