"use client";

import { navElements } from "@/app/kits/constants";
import NavElement from "./navElement";

const NavElements = () => {
  return (
    <div className='hidden  md:flex md:flex-row md:w-[594px] md:justify-between md:items-center md:gap-6 text-black'>
      {navElements.map((el, index) => (
        <NavElement key={el.id} title={el.title} link={el.route} dropdown={el.dropdown} />
      ))}
      <div className=' border-text_secondary border-[2px] text-text_secondary w-[131px] h-[48px] flex items-center justify-center rounded-3xl text-[16px] font-[700] cursor-pointer transition-colors duration-300 hover:bg-text_secondary hover:text-white'>
        Get it now
      </div>
    </div>
  );
};

export default NavElements;
