const DestrArr = () => {
  const number = [1, 2, [44, 33], 3, 4, 5];
  const [first, second, [arr1, arr2], third, ...tail] = number || [];

  return <div>DestrArr</div>;
};
export default DestrArr;
