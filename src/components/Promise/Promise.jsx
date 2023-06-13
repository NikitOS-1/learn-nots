const Promise1 = () => {
  //   const promice1 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("foo");
  //     }, 1000);
  //   });
  //   promice1.then((value) => {
  //     console.log(value);
  //   });
  //   promice1.catch((value) => {});
  //   console.log(promice1);
  fetch("https://jsonplaceholder.typicode.com/todos1/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(() => {
      let error = new Error("ERROR");
      console.error(error);
    });
  return <div>Promise</div>;
};
export default Promise1;
