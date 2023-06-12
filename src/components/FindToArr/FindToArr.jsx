const FindToArr = () => {
  const numbers = [1, 2, 3, 4, 5];
  const langs = ["HTML", "CSS", "JS", "Python", "PHP"];
  const basket = [
    {
      title: "Item1",
      price: 100,
      category: "product",
    },
    {
      title: "Item2",
      price: 200,
      category: "not",
    },
    {
      title: "Item3",
      price: 300,
      category: "product",
    },
  ];
  const result = numbers.includes(9);
  console.log("result", result);
  return <div>FindToArr</div>;
};
export default FindToArr;
