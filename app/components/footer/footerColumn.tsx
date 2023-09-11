"use client";
import {motion} from 'framer-motion'

type FooterColumnProps = {
  arr: any[];
  title: string;
};

const FooterColumn = ({ arr, title }: FooterColumnProps) => {
  return (
    <div  className="flex flex-row ">
      <div className="flex flex-col items-start justify-start gap-3">
        <div className="text-base text- font-bold text-gray-500 mb-1">
          {title}
        </div>
        {arr.map(item => (
          <motion.span initial={{originX: 0}} transition={{duration: 0.3}} whileHover={{scale: 1.1, originX: 0}} key={item.id} className="text-sm cursor-pointer text-secondary hover:opacity-80 transition-opacity duration-300">{item.title}</motion.span>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
