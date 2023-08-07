const LocalStorage = () => {
  //seting
  localStorage.setItem("key", "value");
  //reading
  const item = localStorage.getItem("key");
  // del some item
  localStorage.removeItem("key");
  // clear all LocalStorage
  localStorage.clear();
  return <div>LocalStorage</div>;
};
export default LocalStorage;
