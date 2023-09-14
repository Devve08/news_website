"use client";

import { images } from "@/app/kits/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavElementProps = {
  title: string;
  dropdown: any[];
  link: string;
};

const NavElement = ({ title, dropdown, link }: NavElementProps) => {
  const [dropdownOpen, setDropdown] = useState<boolean>();
  ("render element");
  const handleDropdown = () => {
    setDropdown(!dropdownOpen);
  };
  return (
    <div
      onClick={dropdown?.length > 0 ? handleDropdown : () => {}}
      className=" relative flex flex-row items-center justify-start gap-1 cursor-pointer  "
    >
      <div className=" text-text_primary hover:text-opacity-50 transition-opacity duration-300 font-[600] text-[16px]  ">
        <Link href={`${link}`}>{title}</Link>
      </div>
      {dropdown.length > 0 && (
        <div className="h-[8px] w-[10px]">
          <Image
            src={images.angleDown}
            height={0}
            width={0}
            className="h-full w-full"
            alt={""}
          />
        </div>
      )}
      <AnimatePresence>
        {dropdown.length > 0 && dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -5, opacity: 0 }}
          
            className="w-24 rounded bg-primary absolute top-[100%] flex flex-col gap-2 items-start z-50"
          >
            {dropdown.map((el, index) => (
              <div
                key={el.id}
                className=" text-white font-medium  hover:text-opacity-50 transition-opacity duration-300 font-sans text-base  p-2 z-50 "
              >
                {title}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavElement;
