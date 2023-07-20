const ViewportAnim = () => {
  for (var i = 0; i < 100; i++) {
    setTimeout(
      (n) => {
        console.log(n);
      },
      0,3
      i
    );
  }

  return <div>ViewportAnim</div>;
};
export default ViewportAnim;
