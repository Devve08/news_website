import { useAppDispatch } from "@/app/kits/hooks";
import { images } from "@/app/kits/images";
import { getSearchedArticles, getTopArticles } from "@/app/redux/reducerLayer/articlesReducer";
import Image from "next/image";
import React, { memo } from "react";

type HeroProps = {
  query: string,
  handleOnChangeQuery: any,
  handleSearch: any,
}

const Hero = ({query, handleOnChangeQuery, handleSearch}: HeroProps) => {

  return (
    <div className="bg-background flex flex-row w-full  m-auto h-[80vh] items-center">
      <div className="w-full md:w-1/2 py-8 sm:py-16   ">
        <div className="text-text_primary font-bold text-2xl sm:text-3xl md:text-4xl leading-snug text-center md:text-start">
          Manage all of your cards in one place
        </div>
        <div className="text-text_primary leading-[1.5rem] my-6 text-center md:text-start">
          From year to year we strive to invent the most innovative technology
          that is used by both small enterprises and space enterprises.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-y-4 relative">
          <div className="bg-white h-14 flex flex-row items-center shadow-xl w-full px-8 gap-4 ">
            <Image
              src={images.search}
              className="h-4 w-4"
              width={0}
              height={0}
              alt={""}
          
            />
            <input
              value={query}
              onChange={e => handleOnChangeQuery(e.target.value)}
              type="text"
              placeholder="Search article"
              className="border-none outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-text_secondary text-white py-2 rounded w-full md:w-[25%] text-sm md:absolute right-2 "
          >
            Search
          </button>
        </div>
        <div className="flex flex-row mt-10 items-center gap-4 flex-wrap">
          <div className="text-secondary text-xs font-medium">
            Popular tags:
          </div>
          <div className="bg-blue-200 px-4 py-1 rounded font-medium text-text_secondary text-xs">
            Design
          </div>
          <div className="bg-blue-200 px-4 py-1 rounded font-medium text-text_secondary text-xs">
            User Experience
          </div>
          <div className="bg-blue-200 px-4 py-1 rounded font-medium text-text_secondary text-xs">
            User Interfaces
          </div>
        </div>
      </div>
      <div className="hidden w-1/2  md:flex items-center h-full justify-center">
        <div className=" relative w-[90%] h-[75%]">
          <Image
            src={images.hero}
            width={0}
            height={0}
            className="h-full w-full"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
