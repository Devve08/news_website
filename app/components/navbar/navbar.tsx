"use client";

import Image from "next/image";
import { images } from "../../kits/images";
import BurgerMenu from "../buttons/burgerMenu";
import { motion, AnimatePresence } from "framer-motion";
import NavElements from "./navElements";
import NavPhone from "./navPhone";
import { useAppSelector } from "@/app/kits/hooks";

const Navbar = () => {
  const open = useAppSelector((state) => state.menu.open);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 30 }}
      className=' py-8 px-2 flex flex-row items-center justify-between'
    >
      <div className=' w-24 h-8 relative z-50'>
        <Image src={images.logo} alt={""} fill />
      </div>
      <NavElements />
      <BurgerMenu />
      <AnimatePresence>{open && <NavPhone />}</AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
