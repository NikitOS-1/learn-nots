const ViewportAnim = () => {
  let arr = [1, 3, 6, 2, 45, 323];
  let arrs = {
    a: "1",
    b: "1",
  };
  // let obj = Object.assign(arrs);
  let obj = { ...arrs };
  let objToArr = Object.entries(arrs);

  console.log(objToArr);
  return <div>view</div>;
};
export default ViewportAnim;
