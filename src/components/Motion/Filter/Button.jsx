import { motion } from "framer-motion";

const btnStyle = {
  border: "none",
  outline: "none",
  padding: "12px 16px",
  backgroundColor: "#f1f1f1",
  cursor: "pointer",
};

const Button = (props) => {
  const { text, handleClick = Function.prototype } = props;
  return (
    <motion.button
      style={btnStyle}
      whileHover={{ backgroundColor: "#ddd" }}
      whileTap={{ backgroundColor: "#ccc" }}
      onClick={handleClick}>
      {text}
    </motion.button>
  );
};
export default Button;
