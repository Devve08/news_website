"use client";

import Image from "next/image";
import { images } from "../kits/images";

const ArticleCard = () => {
  return (
    <div className="w-full h-80 rounded flex items-center justify-center ">
      <div className="bg-white h-full rounded w-[80%] sm:w-[90%] shadow-lg">
        <div className="h-1/2 bg-red-400 rounded-t"></div>
        <div className="p-4">
          <div className="text-text_primary text-xl font-bold">
            Future of work
          </div>
          <div className="text-text_primary text-xs mt-2">
            Majority of peole will work in jobs that don’t exist today.
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-red-400 rounded-full h-6 w-6"></div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium text-text_primary">
                  Wrtie name
                </span>
                <div className="flex flex-row items-center gap-1">
                  <Image src={images.verified} className="w-2 h-2" alt={""} />
                  <span className="italic text-[9px] text-secondary">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm text-text_primary">02 May</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
