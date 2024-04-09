// const Closure = () => {
//   function createFn() {
//     function greeting(str) {
//       console.log("Hello " + str);
//     }
//     return greeting;
//   }
//   const hi = createFn();
//   console.log(hi("foo"));
//   return <div>Closure</div>;
// };
// export default Closure;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterArray = (arr) => {
  let newArray = []
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

filterArr(arr)
