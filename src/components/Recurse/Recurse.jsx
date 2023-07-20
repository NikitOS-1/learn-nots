import { clearAllListeners } from "@reduxjs/toolkit";

const Recurse = () => {
  // --------------------------------
  let count = 0;
  function recurse() {
    if (count === 5) {
      return console.log("first");
    }
    count++;
    recurse();
  }
  console.log(recurse());
  // --------------------------------
  const array = [[10, 1, [2, 11]], [1], [4, 1]];

  let onesArray = [];

  function flat(arr) {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        flat(el);
      } else {
        onesArray.push(el);
      }
    });
    return onesArray;
  }
  console.log(flat(array).reduce((acc, el) => acc + el, 0));
  // --------------------------------
  return <div>Recurse</div>;
};
export default Recurse;
