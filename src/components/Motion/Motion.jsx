import { motion } from "framer-motion";

const Motion = () => {
  const pVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const listVariants = {
    vasible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["text1", "text2", "text3"];

  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          // delay:1,
          duration: 2,
          repeat: Infinity,
          // repeatDelay: 1,
          repeatType: "reverse",
          type: "tween",
        }}
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "20px",
          margin: "60px",
        }}
      />
      {items.map((el, i) => (
        <motion.li
          key={el}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={i}>
          {el}
        </motion.li>
      ))}
      <motion.p
        initial={"hidden"}
        animate={"vasible"}
        transition={{ duration: 1 }}
        variants={pVariants}
        whileHover={{
          scale: 1.02,
          color: "blue",
        }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quaerat
        voluptatem possimus neque autem adipisci enim libero commodi dolores,
        odio aut praesentium eum quibusdam beatae repellat asperiores, vitae
        laudantium nulla.
      </motion.p>
    </>
  );
};
export default Motion;
