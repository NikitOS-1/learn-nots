import { useState } from "react";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Tests = () => {
  const [word, setWord] = useState("...");
  const [letter, setLetter] = useState("...");

  return (
    <>
      <button>Click here</button>
      <div>{letter}</div>
      <div>{word}</div>
    </>
  );
};
export default Tests;
