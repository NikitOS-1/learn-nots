const Closure = () => {
  function createFn() {
    function greeting(str) {
      console.log("Hello " + str);
    }
    return greeting;
  }
  const hi = createFn();
  console.log(hi("foo"));
  return <div>Closure</div>;
};
export default Closure;
