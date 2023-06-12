import { clearAllListeners } from "@reduxjs/toolkit";

const Recurse = () => {
  function recurse() {
    recurse();
  }
  console.log(recurse());
  return <div>Recurse</div>;
};
export default Recurse;
