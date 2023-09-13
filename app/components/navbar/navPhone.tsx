"use client";
import { navElements } from "@/app/kits/constants";
import { motion } from "framer-motion";
import NavElement from "./navElement";

const variants = {
  initial: { y: "-100vh", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, type: "spring", stiffness: 30 },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 30 },
  },
};

const NavPhone = () => {
  return (
    <motion.div
      variants={variants}
      animate={"animate"}
      initial={"initial"}
      exit={"exit"}
      className='h-screen w-full bg-gray-300 fixed top-0 left-0 md:hidden z-10'
    >
      <div className='flex flex-col gap-6 h-full items-center justify-center'>
        {navElements.map((el, index) => (
          <motion.div
          key={el.id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2 * index + 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 30,
            }}
          >
            <NavElement key={el.id} title={el.title} dropdown={el.dropdown} />
          </motion.div>
        ))}
        <div className=' border-text_secondary border text-text_secondary py-2 px-4 rounded-3xl text-sm font-medium cursor-pointer transition-colors duration-300 hover:bg-text_secondary hover:text-white'>
          Get it now
        </div>
      </div>
    </motion.div>
  );
};

export default NavPhone;
