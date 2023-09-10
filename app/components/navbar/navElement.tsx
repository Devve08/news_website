"use client";

import { images } from "@/app/kits/images";
import Image from "next/image";

type NavElementProps = {
  title: string;
  dropdown: any[];
};

const NavElement = ({ title, dropdown }: NavElementProps) => {
  return (
    <div className='flex flex-row items-center justify-start gap-1 cursor-pointer hover:opacity-90 transition-opacity duration-300'>
      <div className=' text-text_primary font-medium font-sans text-base '>
        {title}
      </div>
      {dropdown.length > 0 && (
        <Image src={images.angleDown} height={10} width={10} alt={""} />
      )}
    </div>
  );
};

export default NavElement;
