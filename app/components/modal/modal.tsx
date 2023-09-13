"use client";
import { images } from "@/app/kits/images";
import { motion } from "framer-motion";
import Image from "next/image";

type ModalTypes = {
  handleModalStatus: () => void;
  title: string;
  image: string;
  description: string;
  content: string;
};

const Modal = ({
  handleModalStatus,
  title,
  description,
  image,
  content,
}: ModalTypes) => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0, transition: {delay: 0.8}}} transition={{duration:0.3}} className="bg-black bg-opacity-80 h-screen fixed flex justify-center items-center  top-0 right-0 w-full z-40">
      <motion.div initial={{y:'-100vh'}} animate={{y:0}} exit={{y:'-100vh', transition: {delay: 0.3, duration: 0.4}}} transition={{delay:0.5, duration:0.5}} className="w-[90%] absolute opacity-100 bg-white sm:w-[80%] md:w-[60%] h-[70vh] z-50 rounded-md overflow-y-scroll">
        <Image
          onClick={handleModalStatus}
          src={images.arrow}
          className="h-6 rotate-180 m-4 w-6 hover:opacity-80 transition-opacity"
          alt={""}
        />
        <div className="w-full flex flex-col items-center px-4 sm:px-10 md:px-20 gap-8 pb-10">
          <Image
            unoptimized
            src={image? image : images.article}
            className="rounded shadow-md w-full sm:w-2/3 md:w-1/2 h-48 md:h-64"
            width={0}
            height={0}
            alt={""}
          />
          <div className="text-primary font-bold text-center text-lg">
            {title || "No Title Found"}
          </div>
          <div className="text-text_secondary text-center tex-sm font-semibold">
            {content || "No Content Found"}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
