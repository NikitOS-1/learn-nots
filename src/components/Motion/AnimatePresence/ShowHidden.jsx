import { duration } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ShowHidden = (props) => {
  const { title = "click me", children } = props;
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const visibleVariant = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    show: {
      height: "auto",
      opacity: 1,
    },
  };
  return (
    <>
      <div
        onClick={handleVisibility}
        style={{
          backgroundColor: "tomato",
          width: 300,
          padding: "0.8rem 1.2rem",
        }}>
        {title}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            style={{ overflow: "hidden" }}
            // transition={{ duration: 2 }}
            variants={visibleVariant}>
            <div
              style={{
                padding: "0.8rem 1.2rem",
                width: 300,
                border: "1px solid black",
              }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ShowHidden;
