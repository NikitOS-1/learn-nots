const Tests = () => {
  function flat(arr) {
    let newArray = [];

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        flat(el);
      } else {
        newArray.push(el);
      }
    });

    return newArray;
  }

  return <div>Test</div>;
};

export default Tests;
