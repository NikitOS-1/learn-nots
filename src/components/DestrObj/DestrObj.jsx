const DestrObj = () => {
  const myOBJ = {
    a: 1,
    b: 2,
    c: {
      a: 0,
      b: 10,
    },
    d: 4,
  };

  const { d: myName = 0, ...tail } = myOBJ || {};

  return <div>DestrObj</div>;
};
export default DestrObj;
