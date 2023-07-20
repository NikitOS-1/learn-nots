const ViewportAnim = () => {
  const array = [[1, 1, [1, 1]], [1], [1, 1]];
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
  console.log(flat(array));
  return <div>ViewportAnim</div>;
};
export default ViewportAnim;
