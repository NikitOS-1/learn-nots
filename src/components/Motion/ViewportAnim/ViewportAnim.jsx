const ViewportAnim = () => {
  let arr = [1, 3, 6, 2, 45, 323];

  function findMax(array) {
    let maxNum = array[0];

    for (let num of array) {
      if (num > maxNum) {
        maxNum = num;
      }
    }
    return maxNum;
  }
  console.log(findMax(arr));
  return <div>view</div>;
};
export default ViewportAnim;
