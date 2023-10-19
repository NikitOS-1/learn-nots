import { useState } from "react";

const Calc = () => {
  const [res, setRes] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const calc = (e) => {
    let enter = e.target.value;
    setRes(enter);
  };
  return <div>foo</div>;
};
export default Calc;
