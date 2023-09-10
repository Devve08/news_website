"use client";

import useMenuHook from "@/app/customHooks/useMenuHook";
import { useAppSelector } from "@/app/kits/hooks";
import { AnimatePresence, motion } from "framer-motion";

const BurgerMenu = () => {
  const open = useAppSelector((state) => state.menu.open);
  const { handleMenuStatus } = useMenuHook();
  return (
    <AnimatePresence>
      <div
        onClick={handleMenuStatus}
        className='flex flex-col gap-2 md:hidden cursor-pointer z-50'
      >
        <span className=' bg-text_primary w-8 h-[3px] rounded-sm'></span>
        <motion.span
          initial={{ x: 0 }}
          animate={open ? { x: -5 } : { x: 0 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 30,
          }}
          className=' bg-text_primary w-8 h-[3px] rounded-sm'
        ></motion.span>
        <motion.span
          initial={{ x: 0 }}
          animate={open ? { x: -10 } : { x: 0 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 30,
          }}
          className=' bg-text_primary w-8 h-[3px] rounded-sm'
        ></motion.span>
      </div>
    </AnimatePresence>
  );
};

export default BurgerMenu;
