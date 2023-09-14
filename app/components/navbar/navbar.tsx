"use client";

import Image from "next/image";
import { images } from "../../kits/images";
import BurgerMenu from "../buttons/burgerMenu";
import { motion, AnimatePresence } from "framer-motion";
import NavElements from "./navElements";
import NavPhone from "./navPhone";
import { useAppSelector } from "@/app/kits/hooks";
import {memo} from 'react'

const Navbar = () => {
  const open = useAppSelector((state) => state.menu.open);
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 30 }}
      className='flex flex-row items-center justify-between  py-[20px] px-[20px] sm:px-[40px] md:py-[36px] md:px-20'
    >
      <div className=' w-[77.14px] h-[24px] md:w-[90px] md:h-[28px] relative z-50'>
        <Image  src={images.logo} width={0} height={0} alt={""} className="h-auto w-full" />
      </div>
      <NavElements />
      <BurgerMenu />
      <AnimatePresence>{open && <NavPhone />}</AnimatePresence>
    </motion.div>
  );
};

export default memo(Navbar);
