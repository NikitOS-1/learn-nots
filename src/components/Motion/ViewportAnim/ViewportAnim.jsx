const ViewportAnim = () => {
  const item = {
    name: "Car",
    color: "white",
    type: "2.0",
    brand: "hyundai",
    getBrand: () => console.log(item.brand),
    variants: [1, 2, 3, 4, { fn: () => console.log("fn") }],
  };

  const jsonData = JSON.stringify(item);
  const getJsonData = JSON.parse(jsonData);
  console.log(jsonData);

  return <div>ViewportAnim</div>;
};
export default ViewportAnim;
