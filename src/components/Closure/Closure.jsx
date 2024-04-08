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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filterArr = () => {
  let filterArray = []
  arr.filter((i) => (i % 0 ? filterArr.push[i] : false))
  return filterArr
}

filterArr()
