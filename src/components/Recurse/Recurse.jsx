import { clearAllListeners } from "@reduxjs/toolkit";

const Recurse = () => {
  let count = 0;
  function recurse() {
    if (count === 5) {
      return console.log("first");
    }
    count++;
    recurse();
  }
  console.log(recurse());

  return <div>Recurse</div>;
};
export default Recurse;
