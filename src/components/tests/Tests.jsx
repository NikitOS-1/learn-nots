import { useEffect, useState } from "react";

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
  const [letters, setLetters] = useState(alphabet);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [collectedWord, setCollectedWord] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <div>{letters[currentLetterIndex]}</div>
      <div>{collectedWord}</div>
    </div>
  );
};
export default Tests;
