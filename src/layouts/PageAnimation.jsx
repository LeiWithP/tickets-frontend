import React from "react";
import { motion } from "framer-motion";

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;
