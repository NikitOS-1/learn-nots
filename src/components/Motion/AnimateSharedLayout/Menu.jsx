import { motion } from "framer-motion";
import { useState } from "react";

const menuData = ["Short", "Very Looooooong item", "Normal item"];

const Menu = () => {
  const [activeIndex, SetActive] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#eee",
        padding: "1rem",
        borderRadius: "25px",
      }}>
      {menuData.map((item, index) => (
        <MenuItem
          key={item}
          item={item}
          isSelected={activeIndex === index}
          handleClick={() => SetActive(index)}></MenuItem>
      ))}
    </div>
  );
};

export default Menu;

function MenuItem(props) {
  const { item, isSelected, handleClick = Function.prototype } = props;
  return (
    <motion.div
      onClick={handleClick}
      style={{ padding: "0 0.5rem", fontWeight: 900 }}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "red" : "#000" }}>
      {item}
    </motion.div>
  );
}
