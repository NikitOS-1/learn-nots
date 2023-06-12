const DestrObj = () => {
  const myOBJ = {
    a: 1,
    b: 2,
    c: {
      a: 0,
      b: 10,
    },
    d: 4,
    n: [1, 2, 3],
  };

  const {
    d: myName = 0,
    a: firstA = 0,
    c: { a: secondA = 0 },
    n: [, deepB = 0],
    ...tail
  } = myOBJ || {};

  return <div>DestrObj.</div>;
};
export default DestrObj;
