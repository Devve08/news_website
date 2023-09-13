"use client";

import Image from "next/image";
import { images } from "../../kits/images";
import { formatDate } from "@/app/kits/helper";
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UseModalHook from "@/app/customHooks/useModalHook";
import Modal from "../modal/modal";

type ArticleCardProps = {
  title: string | "";
  date: string;
  url: string | "";
  description: string | "";
  author: string;
  content: string | "";
};

const ArticleCard = ({
  title,
  date,
  url,
  description,
  author,
  content,
}: ArticleCardProps) => {
  const { handleModalStatus, modalOpen } = UseModalHook();
  
  return (
    <motion.div className="w-full h-80 rounded flex items-center justify-center cursor-pointer ">
      <motion.div
      whileHover={{scale:0.95, originY: 0,  transition:{duration: 0.4}}}
        onClick={handleModalStatus}
        className="bg-white h-full rounded w-[80%] sm:w-[90%] shadow-lg"
      >
        <div className="h-1/2 relative rounded-t">
          <Image
            blurDataURL={images.article}
            unoptimized
            src={url ? url : images.article}
            className="h-full w-full rounded-t"
            width={0}
            height={0}
            alt={""}
          />
        </div>
        <div className="p-4">
          <div className="text-text_primary text-lg font-bold ellipsis">
            {title}
          </div>
          <div className="text-text_primary text-xs mt-2 ellipsis">
            {description || "No description"}
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-red-400 rounded-full h-6 w-6"></div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium text-text_primary ellipsis_one">
                  {author}
                </span>
                <div className="flex flex-row items-center gap-1">
                  <Image
                    src={images.verified}
                    className="w-2 h-2"
                    height={0}
                    width={0}
                    alt={""}
                  />
                  <span className="italic text-[9px] text-secondary">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xs text-text_primary">{formatDate(date)}</div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {modalOpen && (
          <Modal
            title={title}
            description={description}
            content={content}
            image={url}
            handleModalStatus={handleModalStatus}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default memo(ArticleCard);
