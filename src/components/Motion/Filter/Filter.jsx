import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Filter = ({ data }) => {
  const [cards, setCards] = useState(
    data.filter((el) => el.category === "cars")
  );
  return <div></div>;
};
export default Filter;
