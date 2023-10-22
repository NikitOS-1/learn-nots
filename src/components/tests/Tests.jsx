const Tests = () => {
  function solve(weight0, weight1, weight2) {
    let allArray = [...weight0, ...weight1, ...weight2];
    return allArray.sort((a, b) => a - b);
  }
  return solve([1, 2, 3], [48, 0, 123], [34, 32, 5]);
};
export default Tests;
