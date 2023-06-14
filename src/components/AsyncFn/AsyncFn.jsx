const AsyncFn = () => {
  let url = "https://jsonplaceholder.typicod3e.com/todos/1";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch(console.error("Error now"));

  async function getPosts(url) {
    try {
      const response = await fetch(url);
      const post = await response.json();
      return console.log(post);
    } catch (error) {
      console.error(error.message);
      return error;
    }
  }
  getPosts(url);
  //
  //   const getComments = async () => {};
  //

  return <div>AsyncFn</div>;
};
export default AsyncFn;
