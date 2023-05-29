import React from "react";
import { motion } from "framer-motion";

const ViewAnimation = ({ children }) => {
  return (
    <motion.div
      className="h-full w-full overflow-y-auto"
    //   key={activeTicket ? activeTicket.id : "empty"}
      initial={{ y: 20, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ViewAnimation;
