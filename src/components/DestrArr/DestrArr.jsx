const DestrArr = () => {
  const number = [1, 2, 3, 4, 5];
  const [first, second, third, ...tail] = number || [];

  return <div>DestrArr</div>;
};
export default DestrArr;
