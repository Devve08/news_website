"use client";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div className="flex flex-row w-full justify-center items-center gap-3">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-3 h-3 bg-primary rounded-full"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 0, -10, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-3 h-3 bg-primary rounded-full"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 0, 0, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-3 h-3 bg-primary rounded-full"
      ></motion.div>
    </motion.div>
  );
};

export default Loader;
