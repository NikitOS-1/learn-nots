import PropTypes from "prop-types";
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

const DelObj = (props) => {
  return <div>DelObj</div>;
};
DelObj.propTypes = {};
export default DelObj;
