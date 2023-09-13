"use client";

import { navElements } from "@/app/kits/constants";
import NavElement from "./navElement";

const NavElements = () => {
  return (
    <div className='hidden  md:flex md:flex-row md:gap-6 text-black'>
      {navElements.map((el, index) => (
        <NavElement key={el.id} title={el.title} link={el.route} dropdown={el.dropdown} />
      ))}
      <div className=' border-text_secondary border text-text_secondary py-2 px-4 rounded-3xl text-sm font-medium cursor-pointer transition-colors duration-300 hover:bg-text_secondary hover:text-white'>
        Get it now
      </div>
    </div>
  );
};

export default NavElements;
