const FindToArr = () => {
  const numbers = [1, 2, 3, 4, 5];
  const langs = ["HTML", "CSS", "JS", "Python", "PHP"];
  const basket = [
    {
      id: 1,
      title: "Item1",
      price: 100,
      category: "product",
    },
    {
      id: 2,
      title: "Item2",
      price: 200,
      category: "not",
    },
    {
      id: 3,
      title: "Item3",
      price: 300,
      category: "product",
    },
  ];
  const result = basket.find((element) => element.category === "product");
  console.log("result", result);

  return <div>FindToArr</div>;
};
export default FindToArr;
