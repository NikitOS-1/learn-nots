const Spread = () => {
  // const number1 = [1, 2, 3, 4, 5];
  // const number2 = [7, 8, 9];

  // const allNumbers = [83, ...number1, ...number2];
  // console.log(allNumbers);
  // function sum(a, b, c) {
  //   return a + b + c;
  // }
  // sum(...number1);
  const obj1 = {
    name: "Anna",
    x: 20,
  };
  const obj2 = {
    name: "Bory",
    y: 99,
  };
  const newObjClone = { ...obj1 };
  const mergedObj = { ...obj1, ...obj2 };

  // ...rest остаток от чего то
  function sum(a, b, ...args) {
    let result = a + b;
    for (i = 0; i < args.length; i++) {
      result += args[i];
    }
  }

  return <div>Spread</div>;
};
export default Spread;
