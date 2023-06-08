const DestrObj = () => {
  const myOBJ = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  const { d, ...tail } = myOBJ;

  return <div>DestrObj</div>;
};
export default DestrObj;
