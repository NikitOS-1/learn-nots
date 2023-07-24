const ViewportAnim = () => {
  const item = {
    name: "Car",
    color: "white",
    type: "2.0",
    brand: "hyundai",
    getBrand: () => console.log(item.brand),
    variants: [1, 2, 3, 4, { fn: () => console.log("fn") }],
  };
  for (let key in item) {
    delete item[key];
  }
  const copyItem = {};
  console.log(item);
  // for (let key in item) {
  //   copyItem[key] = item[key];
  // }

  // Object.assign(copyItem, item);

  return <div>ViewportAnim</div>;
};
export default ViewportAnim;
