import { useState } from "react";

const Calc = () => {
  const [res, setRes] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const calc = (e) => {
    let enter = e.target.value;
    setRes(enter);
  };
  return (
    <div>
      <div>{res}</div>
      <div>{res}</div>
      <div className="btn-number">
        <button value="1" onClick={calc}>
          1
        </button>
        <button value="2" onClick={calc}>
          2
        </button>
        <button value="3" onClick={calc}>
          3
        </button>
        <button value="4" onClick={calc}>
          4
        </button>
        <button value="5" onClick={calc}>
          5
        </button>
        <button value="6" onClick={calc}>
          6
        </button>
        <button value="7" onClick={calc}>
          7
        </button>
        <button value="8" onClick={calc}>
          8
        </button>
        <button value="9" onClick={calc}>
          9
        </button>
        <button value="0" onClick={calc}>
          0
        </button>
      </div>
      <div className="btn-calc">
        <button value="+" onClick={calc}>
          +
        </button>
        <button value="-" onClick={calc}>
          -
        </button>
        <button value="=" onClick={calc}>
          =
        </button>
      </div>
    </div>
  );
};
export default Calc;
