"use client";

import { company, more, product, services } from "@/app/kits/constants";
import { images } from "@/app/kits/images";
import Image from "next/image";
import FooterColumn from "./footerColumn";

const FooterDetailsSection = () => {
  return (
    <div className="absolute w-full h-auto sm:h-full sm:top-[45%] md:top-[15%] top-[15%] bg-primary">
      <div className="w-full h-full flex  flex-col sm:flex-col-reverse items-center gap-y-10 md:pb-0 pb-10 sm:justify-start md:justify-between md:flex-row px-4 sm:px-10 gap-x-2 md:px-16">
        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-2/4 md:p-4">
          <div className="text-white font-[700] text-[24px] leading-[32px] sm:text-[36px] sm:leading-[48px] mb-10 text-center md:text-start w-full ">
            Get our stories delivered From us to your inbox weekly.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-center md:justify-start mb-4 ">
            <input
            placeholder="Your Email"
              type="email"
              className="bg-white px-2 text-[16px] rounded-[10px] h-[56px] sm:w-[320px]  outline-none"
            />
            <button className="bg-text_secondary rounded-[10px] text-[16px] sm:text-[18px] font-[700] flex items-center justify-center text-white w-full sm:w-[166px] h-[56px]">
              Get started
            </button>
          </div>
          <div className="text-secondary text-center md:text-start text-[14px] sm:text-[16px] leading-[27px] sm:leading-[28px]">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </div>
        </div>
        <div className="relative w-full sm:flex flex-col justify-center items-center md:w-1/2  sm:h-full hidden ">
          <div className="w-full px-2  flex items-end justify-end">
              <div className="h-[200px] w-[237px] bg-text_secondary rounded-[12px] "></div>
          </div>
          <div className="w-full px-2  flex items-start justify-start">
              <div className="h-[200px] w-[237px] bg-white bg-opacity-20 rounded-[12px] "></div>
          </div>
          <div className="bg-white absolute -mt-16 rounded-[12px] p-2 w-[80%] h-[385px] ">
            <div className="w-full rounded-[12px] bg-red-500 h-3/5 "></div>
            <div className="text-primary text-[24px] font-[700] my-4 px-4">The best aticles every week</div>
            <div className="text-secondary text-[18px] font-[400] leading-[32px] px-4">Our insurance plans offers are priced the same everywhere else.</div>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-4/5 mx-auto my-10 h-[1px] bg-secondary"></div>
      <div className="bg-primary flex-wrap flex px-4 sm:px-10 md:px-16 flex-col-reverse sm:flex-row w-full items-center sm:items-start justify-start">
        <div className="flex flex-col items-center sm:items-start gap-y-4 p-4 w-full sm:w-1/2 md:w-1/5">
          <div className=" w-20 h-6 relative z-50">
            <Image  src={images.logoWhite} alt={""} height={0} width={0} className="h-full w0-full" />
          </div>
          <div className="text-secondary text-sm text-center sm:text-start">
            Build a modern and creative website with crealand
          </div>
          <div className="flex flex-row gap-2">
            {Array(5)
              .fill(5)
              .map((item, index) => (
                <div key={index} className="rounded-full bg-[#FC5A5A] h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px] md:w-[30px] md:h-[30px]  "></div>
              ))}
          </div>
        </div>
        <div className="md:p-4 flex flex-col md:flex-row gap-x-16 gap-y-10">
          <div className="flex flex-row justify-between gap-10 sm:gap-16">
            <FooterColumn arr={product} title={"Product"} />
            <FooterColumn arr={services} title={"Services"} />
          </div>
          <div className="flex flex-row justify-between gap-10 sm:gap-16">
            <FooterColumn arr={company} title={"Company"} />
            <FooterColumn arr={more} title={"More"} />
          </div>
        </div>
      </div>
      <div className="bg-primary py-10 sm:flex flex-col items-center justify-center hidden gap-4">
        <Image src={images.heart} alt={""} height={56} width={56} />
        <div className="text-secondary text-center text-sm">
          Copyright © 2019. Crafted with love.
        </div>
      </div>
    </div>
  );
};

export default FooterDetailsSection;
