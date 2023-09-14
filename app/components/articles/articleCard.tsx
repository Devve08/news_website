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
    <motion.div className="w-full rounded-[12px] shadow-sm flex items-center justify-center cursor-pointer overflow-hidden">
      <motion.div
      whileHover={{scale:0.95, originY: 0,  transition:{duration: 0.4}}}
        onClick={handleModalStatus}
        className="bg-white  rounded-[12px] h-[356px] sm:h-[462px]  md:h-[534px] w-full shadow-lg"
      >
        <div className="h-1/2 relative rounded-t">
          <Image
            blurDataURL={images.article}
            unoptimized
            src={url ? url : images.article}
            className="h-full w-full rounded-t-[12px]"
            width={0}
            height={0}
            alt={""}
          />
        </div>
        <div className="p-4 flex flex-col items-start justify-between h-1/2 w-full">
          <div className="text-text_primary text-[20px] leading-[24px] sm:text-[24px] md:text-[28px] sm:leading-[32px] md:leading-[36px] font-[700] w-full  ellipsis">
            {title}
          </div>
          <div className="text-text_primary text-[14px] sm:text-[18px] leading-[24px] sm:leading-[32px] font-[400] ellipsis">
            {description || "No description"}
          </div>
          <div className="flex flex-row justify-between items-center w-full ">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-red-400 rounded-full sm:h-[40px] sm:w-[40px] h-[36px] w-[36px]"></div>
              <div className="flex flex-col items-start">
                <span className="text-[14px] sm:text-[16px] font-[600] text-text_primary leading-[21.79px] ellipsis_one">
                  {author}
                </span>
                <div className="flex flex-row items-center gap-1">
                  <Image
                    src={images.verified}
                    className="w-[16px] h-[16px]"
                    height={0}
                    width={0}
                    alt={""}
                  />
                  <span className="italic text-[12px] sm:text-[14px] font-[400] text-secondary">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[16px] font-[600] text-text_primary">{formatDate(date)}</div>
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
