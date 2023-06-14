const AsyncFn = () => {
  fetch("https://jsonplaceholder.typicode.com/t1odos/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(console.error("Error now"));

  async function getPosts(url) {
    const response = await fetch(url);
  }
  return <div>AsyncFn</div>;
};
export default AsyncFn;
