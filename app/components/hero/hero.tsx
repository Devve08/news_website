"use client";
import { images } from "@/app/kits/images";

import Image from "next/image";
import React, { memo } from "react";
import { motion, spring } from "framer-motion";

type HeroProps = {
  query: string;
  handleOnChangeQuery: any;
  handleSearch: any;
};

const Hero = ({ query, handleOnChangeQuery, handleSearch }: HeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 30 }}
      className="bg-background flex flex-row w-full relative m-auto  items-start overflow-hidden"
    >
       <div className="h-screen z-10 w-56 hidden sm:flex absolute left-0"> 
      <Image src={images.semiCircle} className="w-full h-full" height={0} width={0} alt={""} />
      </div>
     
      <div className="w-full md:w-1/2 sm:p-10 p-5 md:px-20 md:py-16 z-20 ">
    
        <div className="md:w-[539px]  font-[700] md:text-[56px] text-[32px] leading-[40px] sm:text-[48px] sm:leading-[60px] md:leading-[68px] md:text-left text-center text-text_primary ">
          Manage all of your cards in one place
        </div>
        <div className="text-text_primary sm:text-[20px] md:w-[539px]  font-[400] leading-[28px] text-[16px] sm:leading-[36px] my-4 text-center md:text-start">
          From year to year we strive to invent the most innovative technology
          that is used by both small enterprises and space enterprises.
        </div>
        <div className="flex flex-col sm:h-[56px] sm:w-[555px] sm:flex-row items-center sm:mx-auto md:mx-0 gap-y-4 relative">
          <div className="bg-white h-[48px] sm:h-[56px] flex flex-row items-center shadow-xl w-full px-4 gap-2  rounded-[12px]">
            <Image
              src={images.search}
              className="h-[16px] w-[16px]"
              width={0}
              height={0}
              alt={""}
            />
            <input
              value={query}
              onChange={e => handleOnChangeQuery(e.target.value)}
              type="text"
              placeholder="Search article"
              className="border-none w-full text-text_primary text-[16px] font-[600] outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-text_secondary text-white rounded-[12px] w-full sm:w-[94px] h-[48px] sm:h-[40px] text-[16px] font-[700] sm:absolute right-2 "
          >
            Search
          </button>
        </div>
        <div className="flex flex-row mt-6 items-center sm:justify-center md:justify-start gap-4 flex-wrap">
          <div className="text-secondary text-[16px] font-[600]">
            Popular tags:
          </div>
          <div className="bg-blue-200 px-4 h-[32px] flex items-center justify-center rounded font-[600] text-text_secondary text-[14px]">
            Design
          </div>
          <div className="bg-blue-200 px-4 h-[32px] flex items-center justify-center rounded font-[600] text-text_secondary text-[14px]">
            User Experience
          </div>
          <div className="bg-blue-200 px-4 h-[32px] flex items-center justify-center rounded font-[600] text-text_secondary text-[14px]">
            User Interfaces
          </div>
        </div>
      </div>
      <div className="hidden w-1/2  md:flex items-center h-full justify-center">
        <div className=" relative w-[700px] h-[525px]">
          <Image
            src={images.hero}
            width={0}
            height={0}
            className="h-full w-full"
            alt={""}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Hero);
