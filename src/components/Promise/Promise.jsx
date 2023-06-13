const Promise1 = () => {
  const promice1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000);
  });
  promice1.then((value) => {
    console.log(value);
  });
  promice1.catch((value) => {});
  console.log(promice1);
  return <div>Promise</div>;
};
export default Promise1;
