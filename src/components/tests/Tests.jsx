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
  const [word, setWord] = useState("...");
  const [letter, setLetter] = useState(alphabet);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => {
        if (prevIndex === letter.length - 2) {
          clearInterval(interval);
        }

        return (prevIndex + 1) % letter.length;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [letter]);

  return (
    <>
      <button>Click here</button>
      <div>{letter[currentLetterIndex]}</div>
      <div>{word}</div>
    </>
  );
};
export default Tests;
